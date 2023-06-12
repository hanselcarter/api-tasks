import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { Task } from './models/task';
import { HttpException } from '@nestjs/common';
import { db } from '../config/firebase';
import { taskMock, taskSnapshotMock, taskDtoMock } from '../test/data';
import { TaskDto } from './models/dtos/taskDto';

const setMock = jest.fn();
const updateMock = jest.fn();
const deleteMock = jest.fn();

const docMock = jest.fn().mockReturnValue({
  id: 'fakeId',
  set: setMock,
  update: updateMock,
  delete: deleteMock,
});

jest.mock('dayjs', () => {
  const mockedDay = {
    format: jest.fn().mockReturnValue('2022/02/02'),
  };
  return jest.fn(() => mockedDay);
});

jest.mock('../config/firebase', () => {
  return {
    db: {
      collection: jest.fn().mockImplementation(() => ({
        get: jest.fn().mockResolvedValue({
          docs: [taskSnapshotMock],
        }),
        doc: docMock,
      })),
    },
  };
});

const mockCreatedTask: Task = {
  ...taskDtoMock,
  taskId: taskMock.taskId,
  createdAt: taskMock.createdAt,
};

describe('AppService', () => {
  let service: AppService;

  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getTasks', () => {
    let payload: Task[] | HttpException;

    beforeEach(async () => {
      payload = await service.getTasks();
    });

    it('Should call tasks db collection', () => {
      expect(db.collection).toHaveBeenCalledWith('tasks');
    });

    it('Should return a task array', () => {
      expect(payload).toEqual([taskMock]);
    });
  });

  describe('createTask', () => {
    let payload: Task | HttpException;

    beforeEach(async () => {
      payload = await service.createTask(taskDtoMock);
    });

    it('Should call tasks db collection', () => {
      expect(db.collection).toHaveBeenCalledWith('tasks');
    });

    it('Should call the db set method', () => {
      expect(setMock).toHaveBeenCalled();
    });

    it('Should return the created task', () => {
      expect(payload).toEqual(mockCreatedTask);
    });
  });

  describe('updateTask', () => {
    let payload: TaskDto | HttpException;

    beforeEach(async () => {
      payload = await service.updateTask(taskMock.taskId, taskDtoMock);
    });

    it('Should call tasks db collection', () => {
      expect(db.collection).toHaveBeenCalledWith('tasks');
    });

    it('Should call the db updated method', () => {
      expect(updateMock).toHaveBeenCalled();
    });

    it('Should call document with the correct id', () => {
      expect(docMock).toHaveBeenCalledWith(taskMock.taskId);
    });

    it('Should return the updated task', () => {
      expect(payload).toEqual(taskDtoMock);
    });
  });

  describe('deleteTask', () => {
    let payload: string | HttpException;

    beforeEach(async () => {
      payload = await service.deleteTask(taskMock.taskId);
    });

    it('Should call tasks db collection', () => {
      expect(db.collection).toHaveBeenCalledWith('tasks');
    });

    it('Should call the db delete method', () => {
      expect(deleteMock).toHaveBeenCalled();
    });

    it('Should call document with the correct id', () => {
      expect(docMock).toHaveBeenCalledWith(taskMock.taskId);
    });

    it('Should return the task id from deleted task', () => {
      expect(taskMock.taskId).toEqual(payload);
    });
  });
});

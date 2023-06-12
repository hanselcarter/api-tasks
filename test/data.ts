import { Task, TaskStatus } from '../src/models/task';
import { TaskDto } from '../src/models/dtos/taskDto';

export const taskMock: Task = {
  taskId: 'fakeId',
  description: 'fake description',
  title: 'fake title',
  createdAt: '2022/02/02',
  status: TaskStatus.Completed,
};

export const taskDtoMock: TaskDto = {
  description: 'fake description',
  title: 'fake title',

  status: TaskStatus.Completed,
};

export const taskSnapshotMock = {
  data: () => taskMock,
};

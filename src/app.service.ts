import {
  BadRequestException,
  Injectable,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { db } from '../config/firebase';
import { Task } from './models/task';
import { TaskDto } from './models/dtos/taskDto';
import dayjs from 'dayjs';
import { apiDescription } from './utils/helpers';
@Injectable()
export class AppService {
  public async getTasks(): Promise<Task[] | HttpException> {
    try {
      const tasks: Task[] = [];

      const snapshot = await db.collection('tasks').get();

      snapshot.docs.map((doc) => {
        tasks.push(doc.data() as Task);
      });

      return tasks;
    } catch (err) {
      throw new BadRequestException();
    }
  }

  public async createTask(task: TaskDto): Promise<Task | HttpException> {
    try {
      const taskCollectionRef = db.collection('tasks').doc();

      const taskCreated: Task = {
        ...task,
        taskId: taskCollectionRef.id,
        createdAt: dayjs().format(),
      };

      await taskCollectionRef.set(taskCreated);

      return taskCreated;
    } catch (err) {
      throw new BadRequestException();
    }
  }

  public async updateTask(
    id: string,
    task: TaskDto,
  ): Promise<TaskDto | HttpException> {
    try {
      const taskDocRef = db.collection('tasks').doc(id);

      await taskDocRef.update(task);

      return task;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  public async deleteTask(id: string): Promise<string | HttpException> {
    try {
      await db.collection('tasks').doc(id).delete();

      return id;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  public getApiInfo(): string {
    return apiDescription;
  }
}

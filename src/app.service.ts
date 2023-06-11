import { Injectable } from '@nestjs/common';
import { db } from '../config/firebase';
import { Task } from './models/task';
import { TaskDto } from './models/dtos/taskDto';
import dayjs from 'dayjs';

@Injectable()
export class AppService {
  public async getTasks(): Promise<Task[]> {
    const tasks: Task[] = [];

    const snapshot = await db.collection('tasks').get();

    snapshot.docs.map((doc) => {
      tasks.push(doc.data() as Task);
    });

    return tasks;
  }

  public async createTask(task: TaskDto): Promise<Task> {
    const taskCollectionRef = db.collection('tasks').doc();

    const taskCreated: Task = {
      ...task,
      taskId: taskCollectionRef.id,
      createdAt: dayjs().format(),
    };

    await taskCollectionRef.set(taskCreated);

    return taskCreated;
  }

  public async updateTask(id: string, task: TaskDto): Promise<TaskDto> {
    const taskDocRef = db.collection('tasks').doc(id);

    await taskDocRef.update(task);

    return task;
  }

  public async deleteTask(id: string): Promise<string> {
    await db.collection('tasks').doc(id).delete();

    return id;
  }
}

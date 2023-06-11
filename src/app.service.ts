import { Injectable } from '@nestjs/common';
import { db } from '../config/firebase';
import { Task } from './models/task';

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
}

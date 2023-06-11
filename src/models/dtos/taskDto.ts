import { Task } from '../task';

export type TaskDto = Omit<Task, 'taskId' | 'createdAt'>;

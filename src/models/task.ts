export enum TaskStatus {
  Pending = 'pending',
  Completed = 'completed',
}

export interface Task {
  taskId: string;
  title: string;
  description: string;
  status: TaskStatus;
}

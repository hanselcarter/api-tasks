import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from './models/task';
import { TaskDto } from './models/dtos/taskDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Get all tasks from DB
   */
  @Get('/tasks')
  public async getTasks(): Promise<Task[]> {
    return this.appService.getTasks();
  }

  /**
   * Receives a task dto as body which is a task without the id and the created at prop
   * Then we create task into the db
   */
  @Post('/task')
  public async createTask(@Body() task: TaskDto): Promise<Task> {
    return this.appService.createTask(task);
  }

  /**
   * Receives a task dto as body which is a task without the id and the created at prop
   * Then we update task that has id coming in the params into the db
   */
  @Put('/task/:id')
  public async updateTask(
    @Param() params: { id: string },
    @Body() task: TaskDto,
  ): Promise<TaskDto> {
    console.log(params.id, 'id', task, 'task');
    return this.appService.updateTask(params.id, task);
  }

  /**
   * Receives a task id as param to delete the task containing that id
   */
  @Delete('/task/:id')
  public async deleteTask(@Param() params: { id: string }): Promise<string> {
    console.log(params.id, 'id');
    return this.appService.deleteTask(params.id);
  }
}

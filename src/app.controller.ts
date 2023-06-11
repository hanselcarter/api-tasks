import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from './models/task';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public async getTasks(): Promise<Task[]> {
    return this.appService.getTasks();
  }
}

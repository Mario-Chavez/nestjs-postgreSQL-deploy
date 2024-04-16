import { Module } from '@nestjs/common';
import { TaskControllers } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TaskControllers],
  providers: [TasksService],
})
export class TasksModule {}

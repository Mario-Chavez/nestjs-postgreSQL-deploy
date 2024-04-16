import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TaskControllers {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(@Query() query: any) {
    return this.taskService.getTasks();
  }
  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(parseInt(id));
  }

  @Post()
  createTasks(@Body() task: CreateTaskDto) {
    return this.taskService.createTasks(task);
  }
  @Put()
  putTasks(@Body() task: UpdateTaskDto) {
    return this.taskService.updateTasks(task);
  }
  @Delete()
  deleteTasks() {
    return 'delete total';
  }
  @Patch()
  patchTasks() {
    return 'actualizacion parcial';
  }
}

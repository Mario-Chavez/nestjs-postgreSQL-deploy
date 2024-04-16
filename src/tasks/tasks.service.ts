import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks = [];
  getTasks() {
    return this.tasks;
  }
  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id == id);

    if (!taskFound) {
      return new NotFoundException(`task with id:${id} not found`);
    }
    return taskFound;
  }
  createTasks(task: CreateTaskDto) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }
  updateTasks(task: UpdateTaskDto) {
    return 'actualizacion';
  }
}

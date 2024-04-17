import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/cerate-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/users')
@ApiTags('User')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUser() {
    return this.userService.getUsers();
  }
  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/cerate-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany(); //utiliza ya las funciones de  prisma y postgress
  }
  createUser(user: CreateUserDto) {
    return this.prisma.user.create({ data: user });
  }
}

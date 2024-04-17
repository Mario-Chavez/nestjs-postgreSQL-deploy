import {
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Hello')
export class HelloController {
  @Get('/hello')
  indexedDB(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({
      messages: 'Hello word',
    });
  }
  /* Pipe de nest que viene por defecto */
  @Get('active/:status')
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    console.log(typeof status);

    return status;
  }

  /* nuestro pipe comvierte la edad a numero  */
  @Get('greet')
  greet(@Query(ValidateUserPipe) query: { name: string; age: number }) {
    console.log(typeof query.name);
    console.log(typeof query.age);
    return `name is ${query.name} end age: ${query.age}`;
  }
}

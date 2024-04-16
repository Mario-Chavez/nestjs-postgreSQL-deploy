import { IsBoolean, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(1)
  task: string;

  @IsBoolean()
  complete: boolean;
}

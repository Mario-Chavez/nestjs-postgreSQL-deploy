import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

/* creamos nuestro propio pipe */
@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    const ageNumber = parseInt(value.age.toString(), 10);

    if (isNaN(ageNumber)) {
      return new HttpException('Age must be number', HttpStatus.BAD_REQUEST);
    }
    /* cambiamos la edad a numero con ageNumber */
    return { ...value, age: ageNumber };
  }
}

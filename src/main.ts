import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* Use global pipes  */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  /* Documentation */
  const config = new DocumentBuilder()
    .setTitle('User')
    .setDescription('The User API description')
    .setVersion('1.0')
    .addTag('user')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  /* Cors */
  app.enableCors();

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

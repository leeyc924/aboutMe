import { NestFactory } from '@nestjs/core';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
  app.enableCors(corsOptions);
  await app.listen(8000);
}
bootstrap();

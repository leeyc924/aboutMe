import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setBaseViewsDir(join(__dirname, '../src', 'views')); // 뷰 템플릿 폴더 설정
  app.setViewEngine('ejs'); // EJS 엔진 사용

  await app.listen(3000);
}
bootstrap();

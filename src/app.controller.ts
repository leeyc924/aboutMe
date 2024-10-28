import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index') // index.hbs를 렌더링
  getChatPage() {
    return { title: 'title 변경???' };
  }
}

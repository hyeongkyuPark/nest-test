import { Controller, Get } from '@nestjs/common';

@Controller('notices')
export class NoticesController {
  @Get()
  getAll() {
    return {
      code: '0000',
      data: [
        { title: 'test1 title', description: '테스트 글 입니다.' },
        { title: 'test2 title', description: '테스트 글 입니다.' },
        { title: 'test3 title', description: '테스트 글 입니다.' },
        { title: 'test4 title', description: '테스트 글 입니다.' },
        { title: 'test5 title', description: '테스트 글 입니다.' },
      ],
    };
  }
}

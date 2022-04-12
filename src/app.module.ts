import { Module } from '@nestjs/common';
import { NoticesController } from './notices/notices.controller';

@Module({
  imports: [],
  controllers: [NoticesController],
  providers: [],
})
export class AppModule {}

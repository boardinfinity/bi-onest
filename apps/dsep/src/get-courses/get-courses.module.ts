import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GetCoursesService } from './get-courses.service';

@Module({
  imports: [HttpModule],
  providers: [GetCoursesService],
})
export class GetCoursesModule { }

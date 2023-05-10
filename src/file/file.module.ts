import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { AppModule } from 'src/app.module';

@Module({
  imports: [],
  controllers: [FileController],
  providers: [FileService]
})
export class FileModule {}

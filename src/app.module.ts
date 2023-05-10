import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FileModule } from './file/file.module';
import { Configuration, OpenAIApi } from "openai";

@Module({
  imports: [
    ConfigModule.forRoot(),
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  static openai;

  constructor(private configService: ConfigService) {
    const configuration = new Configuration({ 
      organization: configService.get('OPEN_AI_ORGANIZATION'),
      apiKey: configService.get('OPEN_AI_API_KEY'),
    });

    AppModule.openai = new OpenAIApi(configuration);
  }
}

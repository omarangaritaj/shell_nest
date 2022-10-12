import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvConfiguration } from './config/app.config';
import { JoiConfigSchema } from './config/joi.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [EnvConfiguration],
      validationSchema: JoiConfigSchema,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

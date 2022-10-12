import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters';

@Module({
  exports: [AxiosAdapter, CommonModule],
  providers: [AxiosAdapter],
})
export class CommonModule {}

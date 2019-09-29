import { Module } from '@nestjs/common';
import { BrokerPerformanceController } from './broker-performance.controller';

@Module({
  controllers: [BrokerPerformanceController]
})
export class BrokerPerformanceModule {}

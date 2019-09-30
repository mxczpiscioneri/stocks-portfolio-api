import { Module } from '@nestjs/common';

import { BrokerPerformanceController } from './broker-performance.controller';
import { DatabaseModule } from '../../config/database/database.module';
import { BrokerPerformanceBusiness } from './broker-performance.business';
import { BrokerPerformanceRepository } from './broker-performance.repository';
import { brokerPerformanceProviders } from './broker-performance.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BrokerPerformanceController],
  providers: [
    BrokerPerformanceBusiness,
    BrokerPerformanceRepository,
    ...brokerPerformanceProviders
  ]
})
export class BrokerPerformanceModule {}

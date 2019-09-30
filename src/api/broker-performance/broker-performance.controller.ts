import { Controller, Get } from '@nestjs/common';

import { BrokerPerformanceBusiness } from './broker-performance.business';
import BrokerPerformance from './broker-performance.model';

@Controller('brokerperformances')
export class BrokerPerformanceController {
  constructor(
    private readonly business: BrokerPerformanceBusiness
  ) {}

  @Get()
  async findAll(): Promise<BrokerPerformance[]> {
    const brokerPerformances = await this.business.findAll()
    return brokerPerformances
  }
}

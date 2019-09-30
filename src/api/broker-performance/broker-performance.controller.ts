import { Controller, Get, Post, Body } from '@nestjs/common';

import BrokerPerformance from './broker-performance.model';

import { BrokerPerformanceBusiness } from './broker-performance.business';

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

  @Post()
  async create(@Body() brokerPerformance: BrokerPerformance): Promise<BrokerPerformance> {
    const result = await this.business.create(brokerPerformance)
    return result
  }
}

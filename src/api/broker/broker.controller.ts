import { Controller, Get, Post, Body } from '@nestjs/common';

import Broker from './broker.model';

import { BrokerBusiness } from './broker.business';

@Controller('brokers')
export class BrokerController {
  constructor(
    private readonly business: BrokerBusiness
  ) {}

  @Get()
  async findAll(): Promise<Broker[]> {
    const brokers = await this.business.findAll()
    return brokers
  }

  @Post()
  async create(@Body() broker: Broker): Promise<Broker> {
    const result = await this.business.create(broker)
    return result
  }
}

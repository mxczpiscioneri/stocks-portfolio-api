import { Controller, Get } from '@nestjs/common';
import { BrokerBusiness } from './broker.business';
import Broker from './broker.model';

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
}

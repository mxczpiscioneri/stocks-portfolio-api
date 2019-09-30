import { Controller, Get } from '@nestjs/common';

import Stock from './stock.model';

import { StockBusiness } from './stock.business';

@Controller('stocks')
export class StockController {
  constructor(
    private readonly business: StockBusiness
  ) {}

  @Get()
  async findAll(): Promise<Stock[]> {
    const stocks = await this.business.findAll()
    return stocks
  }
}

import { Controller, Get } from '@nestjs/common';
import { StockBusiness } from './stock.business';
import Stock from './stock.model';

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

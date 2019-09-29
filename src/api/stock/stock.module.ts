import { Module } from '@nestjs/common';
import { StockController } from './stock.controller';
import { DatabaseModule } from '../../config/database/database.module';
import { stockProviders } from './stock.providers';
import { StockBusiness } from './stock.business';
import { StockRepository } from './stock.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [StockController],
  providers: [
    StockBusiness,
    StockRepository,
    ...stockProviders
  ]
})
export class StockModule {}

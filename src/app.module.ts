import { Module } from '@nestjs/common';
import { RecommendationsModule } from './api/recommendations/recommendations.module';
import { BrokerModule } from './api/broker/broker.module';
import { StockModule } from './api/stock/stock.module';
import { BrokerPerformanceModule } from './api/broker-performance/broker-performance.module';

@Module({
  imports: [RecommendationsModule, BrokerModule, StockModule, BrokerPerformanceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

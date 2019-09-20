import { Module } from '@nestjs/common';
import { RecommendationsModule } from './recommendations/recommendations.module';

@Module({
  imports: [RecommendationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

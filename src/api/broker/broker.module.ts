import { Module } from '@nestjs/common';
import { BrokerController } from './broker.controller';
import { DatabaseModule } from '../../config/database/database.module';
import { BrokerRepository } from './broker.repository';
import { brokerProviders } from './broker.providers';
import { BrokerBusiness } from './broker.business';

@Module({
  imports: [DatabaseModule],
  controllers: [BrokerController],
  providers: [
    BrokerRepository,
    BrokerBusiness,
    ...brokerProviders
  ]
})
export class BrokerModule {}

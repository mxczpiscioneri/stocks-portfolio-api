import { Injectable, Inject } from "@nestjs/common";

import BrokerPerformance from "./broker-performance.model";

import { Constants } from "../../domains/constants";

@Injectable()
export class BrokerPerformanceRepository {
  constructor(
    @Inject(Constants.BROKER_PERFORMANCE_REPOSITORY) private readonly model: typeof BrokerPerformance
  ) {}

  async findAll(): Promise<BrokerPerformance[]> {
    return await this.model.findAll()
  }

  async create(brokerPerformance: BrokerPerformance): Promise<BrokerPerformance> {
    return await this.model.create(brokerPerformance)
  }
}

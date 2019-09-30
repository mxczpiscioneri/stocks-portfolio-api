import { Injectable } from "@nestjs/common";

import BrokerPerformance from "./broker-performance.model";

import { BrokerPerformanceRepository } from "./broker-performance.repository";

@Injectable()
export class BrokerPerformanceBusiness {
  constructor(
    private readonly repository: BrokerPerformanceRepository
  ) {}

  async findAll(): Promise<BrokerPerformance[]> {
    try {
      const brokerPerformaces = await this.repository.findAll()
      return brokerPerformaces
    } catch (error) {
      console.log('Error BrokerPerformanceBusiness.findAll', error)
      throw error
    }
  }
}

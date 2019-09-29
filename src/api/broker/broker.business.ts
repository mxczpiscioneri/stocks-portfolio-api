import { Injectable } from "@nestjs/common";
import { BrokerRepository } from "./broker.repository";
import Broker from "./broker.model";


@Injectable()
export class BrokerBusiness {
  constructor(
    private readonly repository: BrokerRepository
  ) {}

  async findAll(): Promise<Broker[]> {
    try {
      const brokers = await this.repository.findAll()
      return brokers
    } catch (error) {
      console.log('Error BrokerBusiness.findAll: ', error.message)
      throw error
    }
  }
}

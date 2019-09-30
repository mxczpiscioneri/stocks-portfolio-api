import { Injectable } from "@nestjs/common";

import Broker from "./broker.model";

import { BrokerRepository } from "./broker.repository";


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

  async create(broker: Broker): Promise<Broker> {
    try {
      const response = await this.repository.create(broker)
      return response
    } catch (error) {
      console.log('Erro BrokerBusiness.create: ', error)
      throw error
    }
  }
}

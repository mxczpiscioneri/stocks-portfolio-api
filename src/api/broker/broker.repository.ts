import { Injectable, Inject } from "@nestjs/common";

import Broker from "./broker.model";

import { Constants } from "../../domains/constants";

@Injectable()
export class BrokerRepository {
  constructor(
    @Inject(Constants.BROKER_REPOSITORY) private readonly model: typeof Broker
  ) {}

  async findAll(): Promise<Broker[]> {
    return await this.model.findAll()
  }

  async create(broker: Broker): Promise<Broker> {
    return await this.model.create(broker)
  }
}

import { Injectable, Inject } from "@nestjs/common";
import { Constants } from "../../domains/constants";
import Broker from "./broker.model";


@Injectable()
export class BrokerRepository {
  constructor(
    @Inject(Constants.BROKER_REPOSITORY) private readonly model: typeof Broker
  ) {}

  async findAll(): Promise<Broker[]> {
    return await this.model.findAll()
  }
}

import { Injectable, Inject } from "@nestjs/common";
import { Constants } from "../../domains/constants";
import Stock from "./stock.model";

@Injectable()
export class StockRepository {
  constructor(
    @Inject(Constants.STOCK_REPOSITORY) private readonly model: typeof Stock
  ) {}

  async findAll(): Promise<Stock[]> {
    return await this.model.findAll()
  }
}
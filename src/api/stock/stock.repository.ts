import { Injectable, Inject } from "@nestjs/common";

import Stock from "./stock.model";

import { Constants } from "../../domains/constants";

@Injectable()
export class StockRepository {
  constructor(
    @Inject(Constants.STOCK_REPOSITORY) private readonly model: typeof Stock
  ) {}

  async findAll(): Promise<Stock[]> {
    return await this.model.findAll()
  }

  async create(stock: Stock): Promise<Stock> {
    return await this.model.create(stock)
  }
}
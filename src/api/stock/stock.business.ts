import { Injectable } from "@nestjs/common";

import Stock from "./stock.model";

import { StockRepository } from "./stock.repository";

@Injectable()
export class StockBusiness {
  constructor(
    private readonly repository: StockRepository
  ) {}

  async findAll(): Promise<Stock[]> {
    try {
      const stocks = await this.repository.findAll()
      return stocks
    } catch (error) {
      console.log('Error StockBusiness.findAll: ', error.message)
      throw error
    }
  }
}
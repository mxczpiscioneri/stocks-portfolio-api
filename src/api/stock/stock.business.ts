import { Injectable } from "@nestjs/common";
import { StockRepository } from "./stock.repository";
import Stock from "./stock.model";

@Injectable()
export class StockBusiness {
  constructor(
    private readonly repository: StockRepository
  ) {}

  async findAll(): Promise<Stock[]> {
    try {
      const stocks = this.repository.findAll()
      return stocks
    } catch (error) {
      console.log('Error StockBusiness.findAll: ', error.message)
      throw error
    }
  }
}
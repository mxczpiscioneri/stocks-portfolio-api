import { Constants } from "../../domains/constants";
import Stock from "./stock.model";

export const stockProviders = [{
  provide: Constants.STOCK_REPOSITORY,
  useValue: Stock
}]
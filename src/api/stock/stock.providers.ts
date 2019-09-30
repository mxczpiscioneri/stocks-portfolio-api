import Stock from './stock.model';

import { Constants } from '../../domains/constants';

export const stockProviders = [{
  provide: Constants.STOCK_REPOSITORY,
  useValue: Stock
}]
import BrokerPerformance from './broker-performance.model'

import { Constants } from '../../domains/constants'

export const brokerPerformanceProviders = [{
  provide: Constants.BROKER_PERFORMANCE_REPOSITORY,
  useValue: BrokerPerformance
}]

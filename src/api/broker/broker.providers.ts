import Broker from './broker.model'
import { Constants } from '../../domains/constants'

export const brokerProviders = [{
  provide: Constants.BROKER_REPOSITORY,
  useValue: Broker
}]

import { Test, TestingModule } from '@nestjs/testing';
import { BrokerPerformanceController } from './broker-performance.controller';

describe('BrokerPerformance Controller', () => {
  let controller: BrokerPerformanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrokerPerformanceController],
    }).compile();

    controller = module.get<BrokerPerformanceController>(BrokerPerformanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

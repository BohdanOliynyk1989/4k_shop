import { Test, TestingModule } from '@nestjs/testing';
import { ProductControllerService } from './product-controller.service';

describe('ProductControllerService', () => {
  let service: ProductControllerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductControllerService],
    }).compile();

    service = module.get<ProductControllerService>(ProductControllerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

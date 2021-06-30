import { Module } from '@nestjs/common';
import { ProductControllerService } from './product-controller.service';
import { ProductControllerController } from './product-controller.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Products, ProductsSchema } from 'src/schemas/productSchema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Products.name, schema: ProductsSchema}])],
  controllers: [ProductControllerController],
  providers: [ProductControllerService]
})
export class ProductControllerModule {}

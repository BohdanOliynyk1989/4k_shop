import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductControllerService } from './product-controller.service';
import { CreateProductControllerDto } from './dto/create-product-controller.dto';
import { UpdateProductControllerDto } from './dto/update-product-controller.dto';
import { Products } from 'src/schemas/productSchema';

@Controller('products')
export class ProductControllerController {
  constructor(private readonly productControllerService: ProductControllerService) {}

  @Post()
  create(@Body() createProductControllerDto: CreateProductControllerDto): Promise<Products> {
    return this.productControllerService.create(createProductControllerDto);
  }

  @Get()
  findAll(): Promise<Products[]> {
    return this.productControllerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Products> {
    return this.productControllerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductControllerDto: UpdateProductControllerDto): Promise<Products> {
    return this.productControllerService.update(id, updateProductControllerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Products> {
    return this.productControllerService.remove(id);
  }
}

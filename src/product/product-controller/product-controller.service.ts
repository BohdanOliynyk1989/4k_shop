import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products, ProductsDocument } from 'src/schemas/productSchema';
import { CreateProductControllerDto } from './dto/create-product-controller.dto';
import { UpdateProductControllerDto } from './dto/update-product-controller.dto';

@Injectable()
export class ProductControllerService {
  constructor(@InjectModel(Products.name) private productsModel: Model<ProductsDocument>) {}
  
  async create(createProductControllerDto: CreateProductControllerDto): Promise<Products> {
    const newProduct = new this.productsModel(createProductControllerDto);
    return newProduct.save();
  }

  async findAll(): Promise<Products[]> {
    return this.productsModel.find().exec();
  }

  async findOne(id: string): Promise<Products> {
    return this.productsModel.findById(id);
  }  

  async update(id: string, updateProductControllerDto: UpdateProductControllerDto): Promise<Products> {
    return this.productsModel.findByIdAndUpdate(id, updateProductControllerDto, {new: true});
  }

  async remove(id: string): Promise<Products> {
    return this.productsModel.findByIdAndRemove(id);
  }
}

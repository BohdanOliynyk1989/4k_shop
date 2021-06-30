import { PartialType } from '@nestjs/mapped-types';
import { CreateProductControllerDto } from './create-product-controller.dto';

export class UpdateProductControllerDto extends PartialType(CreateProductControllerDto) {
    name: string;
    price: number;
}

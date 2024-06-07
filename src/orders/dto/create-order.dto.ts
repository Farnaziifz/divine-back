import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderItemDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}

export class CreateOrderDto {
  @IsNotEmpty()
  userId: number;

  @IsArray()
  items: CreateOrderItemDto[];

  @IsNumber()
  totalPrice: number;
}

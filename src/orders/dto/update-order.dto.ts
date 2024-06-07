import { IsArray, IsNumber, IsOptional } from 'class-validator';

export class UpdateOrderItemDto {
  @IsOptional()
  @IsNumber()
  productId?: number;

  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsNumber()
  price?: number;
}

export class UpdateOrderDto {
  @IsOptional()
  @IsArray()
  items?: UpdateOrderItemDto[];

  @IsOptional()
  @IsNumber()
  totalPrice?: number;
}

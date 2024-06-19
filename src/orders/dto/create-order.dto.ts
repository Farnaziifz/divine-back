export class CreateOrderDto {
  userId: number;
  items: CreateOrderItemDto[];
  totalPrice: number;
}

export class CreateOrderItemDto {
  productId: number;
  quantity: number;
  price: number;
}

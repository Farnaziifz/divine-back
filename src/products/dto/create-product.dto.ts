export class CreateProductDto {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly categoryId: number;
  readonly tagIds: number[];
}

export class CreateProductDto {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly category: number; // category ID
    readonly stock: number;
    readonly user: number; // user ID
  }
  
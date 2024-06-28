import { CreateOrderItemDto } from './create-order-item.dto';

export class CreateOrderDto {
  readonly tax: number;
  readonly shippingFee: number;
  readonly subtotal: number;
  readonly total: number;
  readonly user: number; // user ID
  readonly orderItems: CreateOrderItemDto[];
}

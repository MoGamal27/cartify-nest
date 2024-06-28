import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, order => order.id)
  order: Order;

  @ManyToOne(() => Product, product => product.id)
  product: Product;

  @Column('decimal')
  price: number;

  @Column()
  quantity: number;
}

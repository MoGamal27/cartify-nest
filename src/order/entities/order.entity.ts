import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { OrderItem } from './order-item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  tax: number;

  @Column('decimal')
  shippingFee: number;

  @Column('decimal')
  subtotal: number;

  @Column('decimal')
  total: number;

  @ManyToOne(() => User, user => user.id)
  user: User;

  @OneToMany(() => OrderItem, orderItem => orderItem.order)
  orderItems: OrderItem[];
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = this.orderRepository.create(createOrderDto);
    const savedOrder = await this.orderRepository.save(order);
    for (const item of createOrderDto.orderItems) {
      const orderItem = this.orderItemRepository.create({
        ...item,
        order: savedOrder,
      });
      await this.orderItemRepository.save(orderItem);
    }
    return savedOrder;
  }

  findAll(): Promise<Order[]> {
    return this.orderRepository.find({ relations: ['user', 'orderItems', 'orderItems.product'] });
  }

  findOne(id: number): Promise<Order> {
    return this.orderRepository.findOne(id, { relations: ['user', 'orderItems', 'orderItems.product'] });
  }

  async remove(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
}


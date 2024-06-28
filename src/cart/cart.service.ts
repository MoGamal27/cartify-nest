import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {}

  create(createCartDto: CreateCartDto): Promise<Cart> {
    const cart = this.cartRepository.create(createCartDto);
    return this.cartRepository.save(cart);
  }

  findAll(): Promise<Cart[]> {
    return this.cartRepository.find({ relations: ['user', 'product'] });
  }

  findOne(id: number): Promise<Cart> {
    return this.cartRepository.findOne(id, { relations: ['user', 'product'] });
  }

  async remove(id: number): Promise<void> {
    await this.cartRepository.delete(id);
  }
}


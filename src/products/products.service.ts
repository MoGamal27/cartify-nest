import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({ relations: ['category', 'user'] });
  }

  findOne(id: number): Promise<Product> {
    return this.productsRepository.findOne(id, { relations: ['category', 'user'] });
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}


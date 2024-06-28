import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { CategoryModule } from './category/category.module';
import { CartModule } from './cart/cart.module';
import { databaseProviders } from './config/database';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ...databaseProviders,
    UsersModule,
    ProductsModule,
    OrderModule,
    CategoryModule,
    CartModule,
    PaymentModule,
  ],
})
export class AppModule {}


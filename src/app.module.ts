import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductModule } from './products/products.module';
import { User } from './users/user.entity';
import { Product } from './products/entities/product.entity';
import { Category } from './products/entities/category.entity';
import { Tag } from './products/entities/tag.entity';
import { Order } from './orders/entities/order.entity';
import { OrderItem } from './orders/entities/order-item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'farnaziiifz',
      password: '',
      database: 'divine_db',
      entities: [User, Product, Category, Tag, Order, OrderItem],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    ProductModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { TagModule } from './tags/tag.module';
import { User } from './users/user.entity';
import { Product } from './products/entities/product.entity';
import { Category } from './category/category.entity';
import { Tag } from './tags/entities/tag.entity';
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
      // logging: true,
    }),
    AuthModule,
    UsersModule,
    ProductModule,
    CategoryModule,
    TagModule,
  ],
})
export class AppModule {}

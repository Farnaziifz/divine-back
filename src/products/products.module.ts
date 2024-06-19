import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { Category } from '../category/category.entity';
import { Tag } from '../tags/entities/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category, Tag])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}

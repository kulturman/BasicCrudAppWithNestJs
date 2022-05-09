import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormconfig';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot(config)
  ]
})
export class AppModule {}

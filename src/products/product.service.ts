import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductDto } from "./dtos/create-product.dto";
import { Product } from './entities/product.entity';
import { Repository } from "typeorm";
import { UpdateProductDto } from "./dtos/update-product.dto";

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}
    
    getAll() {
        return this.productRepository.find();
    }

    addProduct(CreateProductDto: CreateProductDto) {
        this.productRepository.insert(
            new Product(CreateProductDto.name, CreateProductDto.price)
        );
    }

    async updateProduct(id: number, updateProductDto: UpdateProductDto) {
        const product = await this.productRepository.findOne(id);
        if (!product) {
            throw new NotFoundException();
        }
        product.name = updateProductDto.name;
        product.price = updateProductDto.price;
        this.productRepository.save(product);
    }

    async getProduct(id: number): Promise<Product> {
        const product = await this.productRepository.findOne(id);
        if (!product) {
            throw new NotFoundException();
        }
        return product;
    }

    deleteProduct(id: number) {
        this.productRepository.delete(id);
    }
}
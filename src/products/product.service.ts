import { Injectable, NotFoundException } from "@nestjs/common";
import { ProductDto } from "./dtos/product.dto";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
    private readonly products: Product[] = [];

    getAll() {
        return this.products;
    }

    addProduct(productDto: ProductDto) {
        this.products.push(new Product(new Date().getMilliseconds(), productDto.name));
    }

    getProduct(id: number) {
        const product = this.products.find(p => p.id === id);
        if (product == null) {
            throw new NotFoundException(`Product ${id} not found`);
        }

        return product;
    }
}
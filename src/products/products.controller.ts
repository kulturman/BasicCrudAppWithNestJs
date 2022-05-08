import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { type } from "os";
import { ProductDto } from "./dtos/product.dto";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductService) {}

    @Get()
    getAll() {
        return this.productService.getAll();
    }

    @Post()
    addProduct(@Body() productDto: ProductDto) {
        this.productService.addProduct(productDto);
    }

    @Get(':id')
    getProduct(@Param('id', ParseIntPipe) id: number): Product {console.log(typeof id);
        return this.productService.getProduct(id);
    }
}
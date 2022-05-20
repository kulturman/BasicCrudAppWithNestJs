import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateProductDto } from "./dtos/create-product.dto";
import { UpdateProductDto } from "./dtos/update-product.dto";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductService) {}

    @Get()
    getAll() {
        return this.productService.getAll();
    }

    @Post()
    addProduct(@Body() createProductDto: CreateProductDto) {
        this.productService.addProduct(createProductDto);
    }

    @Put(':id')
    updateProduct(@Param('id', ParseIntPipe) id: number, @Body() updateProductDto: UpdateProductDto) {
        this.productService.updateProduct(id, updateProductDto);
    }

    @Get(':id')
    getProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productService.getProduct(id);
    }

    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id: number) {
        this.productService.deleteProduct(id);
    }

}
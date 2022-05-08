import { IsEmail, IsNotEmpty } from "class-validator";

export class ProductDto {
    @IsNotEmpty()
    name: string;
}
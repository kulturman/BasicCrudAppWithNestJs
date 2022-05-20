import { IsNotEmpty, IsPositive } from "class-validator";

export class UpdateProductDto {
    @IsNotEmpty()
    name: string;

    @IsPositive()
    price: number;
}
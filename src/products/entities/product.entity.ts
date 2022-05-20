import { Entity, PrimaryGeneratedColumn , Column } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    name: string

    @Column()
    price: number;
}
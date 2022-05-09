import { Entity, PrimaryGeneratedColumn , Column } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    name: string
}
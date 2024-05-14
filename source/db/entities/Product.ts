import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Relation,
} from "typeorm";
import { User } from "./User";

@Entity()
class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  handle: string;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 255 })
  description: string;

  @Column({ unique: true })
  sku: string;

  @Column({ type: "float" })
  grams: number;

  @Column({})
  stock: number;

  @Column({ type: "float" })
  price: number;

  @Column({ type: "float" })
  comparePrice: number;

  @Column({ length: 13 })
  barcode: string;

  @ManyToOne(() => User, (user) => user.id, {
    cascade: true,
  })
  @JoinColumn()
  user: Relation<User>;

  constructor(
    handle: string,
    title: string,
    description: string,
    sku: string,
    grams: number,
    stock: number,
    price: number,
    comparePrice: number,
    barcode: string
  ) {
    this.handle = handle;
    this.title = title;
    this.description = description;
    this.sku = sku;
    this.grams = grams;
    this.stock = stock;
    this.price = price;
    this.comparePrice = comparePrice;
    this.barcode = barcode;
  }
}

export { Product };

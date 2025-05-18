import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Promocode {
  @PrimaryGeneratedColumn()
  promoId: number;

  @Column()
  promoName: string;

  @Column()
  percentageDiscount: number;

  @CreateDateColumn()
  createdAt: Date;
}

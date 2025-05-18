import { Bouquet } from 'src/bouquets/entities/bouquet.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  reviewId: number;

  @Column()
  rating: number;

  @Column({ type: 'text' })
  feedback: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Bouquet, (bouquet) => bouquet.reviews, {
    onDelete: 'CASCADE',
  })
  bouquet: Bouquet;
}

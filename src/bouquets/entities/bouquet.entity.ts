import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Review } from 'src/review/entities/review.entity';

@Entity()
export class Bouquet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  cost: number;

  @Column()
  imageUrl: string;

  @Column()
  rating: number;

  @Column('jsonb', { default: [] })
  categories: string[];

  @Column('jsonb', { nullable: true })
  filters: {
    lighting: string;
    colors: string[];
    format: string[];
    flowers: string[];
  };

  @OneToMany(() => Review, (review) => review.bouquet)
  reviews: Review[];
}

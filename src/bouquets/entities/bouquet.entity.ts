import { Review } from 'src/review/entities/review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bouquet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cost: number;

  @Column()
  imageUrl: string;

  @Column()
  rating: number;

  @Column('simple-json')
  categories: {
    category1?: string;
    category2?: string;
    category3?: string;
    category4?: string;
    category5?: string;
  };

  @Column('simple-json')
  filters: {
    lighting: string;
    colors: {
      color1?: string;
      color2?: string;
      color3?: string;
    };
    format: {
      format1?: string;
      format2?: string;
      format3?: string;
    };
    flowers: {
      flower1?: string;
      flower2?: string;
      flower3?: string;
    };
  };

  @OneToMany(() => Review, (review) => review.bouquet)
  reviews: Review[];
}

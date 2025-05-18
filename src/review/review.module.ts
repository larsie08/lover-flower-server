import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Bouquet } from 'src/bouquets/entities/bouquet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review, Bouquet])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}

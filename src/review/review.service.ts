import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { Bouquet } from 'src/bouquets/entities/bouquet.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    @InjectRepository(Bouquet)
    private readonly bouquetRepository: Repository<Bouquet>,
  ) {}

  async create(createReviewDto: CreateReviewDto) {
    const bouquet = await this.bouquetRepository.findOne({
      where: { id: createReviewDto.bouquetId },
    });

    if (!bouquet) {
      throw new NotFoundException('Bouquet not found');
    }

    const review = this.reviewRepository.create({
      ...createReviewDto,
      bouquet,
    });

    return this.reviewRepository.save(review);
  }
}

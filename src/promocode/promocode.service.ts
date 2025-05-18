import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePromocodeDto } from './dto/create-promocode.dto';
import { UpdatePromocodeDto } from './dto/update-promocode.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Promocode } from './entities/promocode.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PromocodeService {
  @InjectRepository(Promocode)
  private readonly promocodeRepository: Repository<Promocode>;

  async create(createPromocodeDto: CreatePromocodeDto) {
    return await this.promocodeRepository.save(createPromocodeDto);
  }

  async findOne(promo: string) {
    const promocode = await this.promocodeRepository.findOne({
      where: { promoName: promo },
    });

    if (!promocode) {
      throw new NotFoundException('Promocode not found');
    }

    return promocode;
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BouquetsService } from './bouquets.service';
import { BouquetsController } from './bouquets.controller';
import { Bouquet } from './entities/bouquet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bouquet])],
  controllers: [BouquetsController],
  providers: [BouquetsService],
})
export class BouquetsModule {}

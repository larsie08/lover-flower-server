import { Module } from '@nestjs/common';
import { BouquetsService } from './bouquets.service';
import { BouquetsController } from './bouquets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bouquet } from './entities/bouquet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bouquet])],
  controllers: [BouquetsController],
  providers: [BouquetsService],
})
export class BouquetsModule {}

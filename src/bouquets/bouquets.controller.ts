import { Controller, Get, Post, Body, Param, Query, Delete, Patch } from '@nestjs/common';
import { BouquetsService } from './bouquets.service';

import { CreateBouquetDto } from './dto/create-bouquet.dto';
import { UpdateBouquetDto } from './dto/update-bouquet.dto';

@Controller('bouquets')
export class BouquetsController {
  constructor(private readonly bouquetsService: BouquetsService) {}

  @Post()
  create(@Body() createBouquetDto: CreateBouquetDto) {
    return this.bouquetsService.create(createBouquetDto);
  }

  @Get()
  findAll(
    @Query()
    params: {
      sortBy: string;
      category?: string;
      minPriceValue: string;
      maxPriceValue: string;
      filters: string[];
    },
  ) {
    return this.bouquetsService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bouquetsService.findOne(+id);
  }

  @Get('search/:searchValue')
  findSearch(@Param('searchValue') searchValue: string) {
    return this.bouquetsService.findSearch(searchValue);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBouquetDto: UpdateBouquetDto) {
    return this.bouquetsService.update(+id, updateBouquetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bouquetsService.remove(+id);
  }
}

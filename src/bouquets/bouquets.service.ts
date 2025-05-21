import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bouquet } from './entities/bouquet.entity';

import { CreateBouquetDto } from './dto/create-bouquet.dto';
import { UpdateBouquetDto } from './dto/update-bouquet.dto';

@Injectable()
export class BouquetsService {
  constructor(
    @InjectRepository(Bouquet)
    private readonly bouquetRepositore: Repository<Bouquet>,
  ) {}

  async create(createBouquetDto: CreateBouquetDto) {
    return await this.bouquetRepositore.save(createBouquetDto);
  }

  async findAll(params: {
    sortBy: string;
    category?: string;
    minPriceValue: string;
    maxPriceValue: string;
    filters: string[];
  }): Promise<Bouquet[]> {
    const sorters = {
      rating: (a: Bouquet, b: Bouquet) => b.rating - a.rating,
      name: (a: Bouquet, b: Bouquet) => a.name.localeCompare(b.name),
      cost: (a: Bouquet, b: Bouquet) => a.cost - b.cost,
    };

    const bouquets = await this.bouquetRepositore.find({
      relations: {
        reviews: true,
      },
    });
    const { sortBy, category, minPriceValue, maxPriceValue, filters } = params;

    const filteredBouquets = filterBouquets(
      category,
      minPriceValue,
      maxPriceValue,
      filters,
      bouquets,
    );

    if (filteredBouquets.length === 0) {
      throw new NotFoundException(
        category
          ? `Букеты с категорией "${category}" не найдены`
          : 'Букеты не найдены',
      );
    }

    return [...filteredBouquets].sort(sorters[sortBy]);
  }

  async findOne(id: number): Promise<Bouquet> {
    const bouquet = await this.bouquetRepositore.findOne({
      where: {
        id,
      },
      relations: {
        reviews: true,
      },
    });

    if (!bouquet) throw new NotFoundException('Не найден необходимый букет');

    return bouquet;
  }

  async findSearch(searchValue: string): Promise<Bouquet[]> {
    const bouquets = await this.bouquetRepositore.find();

    const regExp = new RegExp(`${searchValue}`, 'gi');

    const searchResult: Bouquet[] = [];

    for (let bouquet of bouquets) {
      const matchedBouquets = bouquet.name.search(regExp);
      if (matchedBouquets !== -1) searchResult.push(bouquet);
    }

    if (searchResult.length === 0) {
      throw new NotFoundException('Поиск не дал результатов');
    }

    return searchResult;
  }

  async update(id: number, updateBouquetDto: UpdateBouquetDto) {
    const bouquet = await this.bouquetRepositore.find({ where: { id } });

    if (!bouquet) throw new NotFoundException('Не найден необходимый букет');

    return await this.bouquetRepositore.update(id, updateBouquetDto);
  }

  async remove(id: number) {
    const bouquet = await this.bouquetRepositore.find({ where: { id } });

    if (!bouquet) throw new NotFoundException('Не найден необходимый букет');

    return await this.bouquetRepositore.delete(id);
  }
}

function filterBouquets(
  category: string | undefined,
  minPriceValue: string,
  maxPriceValue: string,
  filtersIds: string[],
  bouquets: Bouquet[],
): Bouquet[] {
  const minPrice = Number(minPriceValue);
  const maxPrice = Number(maxPriceValue);

  const isWithinPriceRange = (cost: number) =>
    cost >= minPrice && cost <= maxPrice;

  const isFilterMatched = (bouquet: Bouquet): boolean => {
    const { filters } = bouquet;

    return (
      filtersIds.includes(filters.lighting) ||
      filters.colors.some((id) => filtersIds.includes(id)) ||
      filters.format.some((id) => filtersIds.includes(id)) ||
      filters.flowers.some((id) => filtersIds.includes(id))
    );
  };

  const filteredByCategory = category
    ? bouquets.filter((b) => (b.categories || []).includes(category))
    : bouquets;

  if (!filteredByCategory) return [];

  if (!filtersIds) {
    return filteredByCategory.filter((b) => isWithinPriceRange(b.cost));
  }

  return filteredByCategory.filter(
    (b) => isFilterMatched(b) && isWithinPriceRange(b.cost),
  );
}

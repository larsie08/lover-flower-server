import { Bouquet } from 'src/bouquets/entities/bouquet.entity';

export interface ICartItem extends Bouquet {
  quantity: number;
}

export type BouquetFilters = {
  lighting: string;
  colors: string[];
  format: string[];
  flowers: string[];
};

export const DELIVERY_OPTIONS = ['Самовывоз', 'Доставка курьером'] as const;
export const PAYMENT_OPTIONS = [
  'Банковская карта',
  'Наличными',
  'Apple pay',
  'Google pay',
  'Криптовалюта',
  'С расчетного счета',
] as const;
export const PROMOCODE_OPTIONS = ['kiriewka', 'bonybog'] as const;

export type DeliveryRadioGroupOption = (typeof DELIVERY_OPTIONS)[number];
export type PayRadioGroupOptions = (typeof PAYMENT_OPTIONS)[number];
export type PromocodeOption = (typeof PROMOCODE_OPTIONS)[number];

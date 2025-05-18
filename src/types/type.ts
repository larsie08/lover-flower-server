export interface IBouquet {
  id: number;
  name: string;
  cost: number;
  imageUrl: string;
  category1?: string;
  category2?: string;
  category3?: string;
  category4?: string;
  category5?: string;
  filters: BouquetFilters;
}

export interface ICartItem extends IBouquet {
  quantity: number;
}

export type BouquetFilters = {
  lighting: string;
  colors: {
    color1: string;
    color2?: string;
    color3?: string;
  };
  format: {
    format1: string;
    format2?: string;
    format3?: string;
  };
  flowers: {
    flower1: string;
    flower2?: string;
    flower3?: string;
  };
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

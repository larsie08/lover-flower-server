import { IsInt, IsString } from 'class-validator';

export class CreatePromocodeDto {
  @IsString()
  promoName: string;

  @IsInt()
  percentageDiscount: number;
}

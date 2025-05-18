import { IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber } from 'class-validator';
import {
  DELIVERY_OPTIONS,
  DeliveryRadioGroupOption,
  PAYMENT_OPTIONS,
  PayRadioGroupOptions,
} from 'src/types/type';

export class CreateOrderDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  phoneNumber: string;

  @IsNotEmpty()
  name: string;

  // @IsPhoneNumber()
  // @IsNotEmpty()
  // secondPhoneNumber?: string;

  // @IsEmpty()
  // receiverName?: string;

  // @IsEmpty()
  // comment?: string;

  @IsEnum(DELIVERY_OPTIONS)
  deliveryMethod: DeliveryRadioGroupOption;

  @IsEnum(PAYMENT_OPTIONS)
  paymentMethod: PayRadioGroupOptions;

  // @IsEnum(PROMOCODE_OPTIONS)
  // appliedPromoCode?: string;
}

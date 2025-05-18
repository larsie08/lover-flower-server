import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import {
  DELIVERY_OPTIONS,
  DeliveryRadioGroupOption,
  PAYMENT_OPTIONS,
  PayRadioGroupOptions,
} from 'src/types/type';
import { Bouquet } from 'src/bouquets/entities/bouquet.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  secondPhoneNumber?: string;

  @Column({ nullable: true })
  receiverName?: string;

  @Column({ nullable: true })
  comment?: string;

  @Column({
    type: 'enum',
    enum: DELIVERY_OPTIONS,
    default: 'Самовывоз',
  })
  deliveryMethod: DeliveryRadioGroupOption;

  @Column({ type: 'enum', enum: PAYMENT_OPTIONS, default: 'Банковская карта' })
  paymentMethod: PayRadioGroupOptions;

  @Column({ nullable: true })
  appliedPromoCode?: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { cascade: true })
  cartItems: OrderItem[];

  @Column()
  finalPrice: string;

  @Column('simple-json', { nullable: true })
  address?: {
    deliveryAddress: string;
    apartmentNumber: string;
    deliveryTime: string;
  };

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.cartItems, { onDelete: 'CASCADE' })
  order: Order;

  @ManyToOne(() => Bouquet, { eager: true })
  bouquet: Bouquet;

  @Column()
  quentity: number;

  @Column()
  cost: number;
}

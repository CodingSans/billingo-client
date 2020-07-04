import { PaymentMethod } from "../enums/payment";

export interface PaymentHistory {
  date: string;
  price: number;
  payment_method: PaymentMethod;
  voucher_number?: string;
  conversion_rate?: number;
}

import { Currency } from '../enums/currency';
import { List } from './list';

export interface BankAccount {
  id?: number;
  name: string;
  account_number: string;
  account_number_iban?: string;
  swift?: string;
  currency: Currency;
  need_qr?: boolean;
}

export type BankAccountList = List<BankAccount>;

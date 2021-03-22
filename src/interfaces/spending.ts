import { Category } from '../enums';
import { Currency } from '../enums';
import { Address } from './address';
import { List } from './list';

export interface SpendingPartner {
  id: number;
  name: string;
  tax_code: string;
  address: Address;
}

export type SpendingPaymentMethod =
  | 'aruhitel'
  | 'bankcard'
  | 'barion'
  | 'barter'
  | 'cash'
  | 'cash_on_delivery'
  | 'coupon'
  | 'elore_utalas'
  | 'ep_kartya'
  | 'kompenzacio'
  | 'levonas'
  | 'online_bankcard'
  | 'other'
  | 'paylike'
  | 'payoneer'
  | 'paypal'
  | 'paypal_utolag'
  | 'payu'
  | 'pick_pack_pont'
  | 'postai_csekk'
  | 'postautalvany'
  | 'skrill'
  | 'szep_card'
  | 'transferwise'
  | 'upwork'
  | 'utalvany'
  | 'valto'
  | 'wire_transfer';

export interface Spending {
  id: number;
  organization_id: number;
  category: Category;
  paid_at: string | null;
  fulfillment_date: string;
  partner: SpendingPartner;
  invoice_number: string;
  currency: Currency;
  total_gross: number;
  total_vat_amount: number;
  invoice_date: string;
  due_date: string;
  payment_method: SpendingPaymentMethod;
  comment: string | null;
}

export type SpendingList = List<Spending>;

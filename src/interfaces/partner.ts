import { Address } from "./address";
import { List } from "./list";

export interface PartnerUpsert {
  name: string;
  address: Address;
  emails?: string[];
  taxcode?: string;
  iban?: string;
  swift?: string;
  account_number?: string;
  phone?: string;
  general_ledger_number?: string;
}

export interface Partner extends PartnerUpsert {
  id?: number;
}

export type PartnerList = List<Partner>;

import { Currency } from "../enums/currency";
import { Vat } from "../enums/vat";
import { List } from "./list";

export interface Product {
  id?: number;
  name: string;
  comment?: string;
  currency: Currency;
  vat: Vat;
  net_unit_price?: number;
  unit: string;
  general_ledger_number?: string;
  general_ledger_taxcode?: string;
}

export type ProductList = List<Product>;

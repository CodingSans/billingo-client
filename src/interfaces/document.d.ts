import { Vat } from "../enums/vat";
import { List } from "./list";
import { Currency } from "../enums/currency";
import { Partner } from "./partner";
import { Round } from "../enums/round";
import { OnlinePayment, PaymentMethod, PaymentStatus } from "../enums/payment";
import { UnitPriceType } from "../enums/unit-price-type";
import { Address } from "./address";
import { DocumentLanguage } from "../enums/document-language";
import { DocumentNotificationStatus } from "../enums/document-notification-status";
import { DocumentInsertType } from "../enums/document-insert-type";

export interface Document {
  id: number;
  invoice_number: string;
  type: DocumentType;
  cancelled: boolean;
  block_id: number;
  payment_status: PaymentStatus;
  payment_method: PaymentMethod;
  gross_total: number;
  currency: Currency;
  conversion_rate: number;
  invoice_date: string;
  fulfillment_date: string;
  due_date: string;
  paid_date: string;
  organization: DocumentOrganization;
  partner: Partner;
  electronic: boolean;
  comment: string;
  tags: string[];
  notification_status: DocumentNotificationStatus;
  language: DocumentLanguage;
  items: DocumentItem[];
  summary: DocumentSummary;
  settings: DocumentSettings;
}

export interface DocumentItem {
  product_id: number;
  name: string;
  net_unit_amount: number;
  quantity: number;
  net_amount: number;
  gross_amount: number;
  vat: Vat;
  vat_amount: number;
}

export interface DocumentItemData {
  product_id: number;
  quantity: number;
}

export type DocumentList = List<Document>;

export interface DocumentSettings {
  mediated_service: boolean;
  without_financial_fulfillment: boolean;
  online_payment: OnlinePayment;
  round: Round;
  place_id: number;
}

export interface DocumentSummary {
  net_amount: number;
  net_amount_local: number;
  gross_amount_local: number;
  vat_amount: number;
  vat_amount_local: number;
  vat_rate_summary: DocumentVatRateSummary;
}

export interface DocumentVatRateSummary {
  vat_name: string;
  vat_percentage: number;
  vat_rate_net_amount: number;
  vat_rate_vat_amount: number;
  vat_rate_vat_amount_local: number;
  vat_rate_gross_amount: number;
}

export interface DocumentPublicUrl {
  public_url: string;
}

export interface DocumentBankAccount {
  id?: number;
  name: string;
  account_number: string;
  account_number_iban?: string;
  swift?: string;
}

export interface DocumentInsert {
  vendor_id?: string;
  partner_id: number;
  block_id: number;
  bank_account_id?: number;
  type: DocumentInsertType;
  fulfillment_date: string;
  due_date: string;
  payment_method: PaymentMethod;
  language: DocumentLanguage;
  currency: Currency;
  conversion_rate?: number;
  electronic?: boolean;
  paid?: boolean;
  items?: (DocumentItemData | DocumentProductData)[];
  comment?: string;
  settings?: DocumentSettings;
}

export interface DocumentOrganization {
  name?: string;
  tax_number?: string;
  bank_account?: DocumentBankAccount;
  address?: Address;
  small_taxpayer?: boolean;
  ev_number?: string;
  eu_tax_number?: string;
  cash_settled?: boolean;
}

export interface DocumentProductData {
  name: string;
  unit_price: number;
  unit_price_type: UnitPriceType;
  quantity: number;
  unit: string;
  vat: Vat;
  comment?: string;
}

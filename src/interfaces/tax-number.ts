export type CheckTaxNumberMessage =
  | 'external_nav_service_unreachable'
  | 'invalid_tax_number'
  | 'no_online_szamla_settings'
  | 'non_exist_tax_number'
  | 'validation_ok';

export interface TaxNumber {
  tax_number: 'string';
  result: CheckTaxNumberMessage;
}

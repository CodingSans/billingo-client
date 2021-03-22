import { PaymentMethod } from '../enums';

export type DocumentExportQueryType = 'fulfillment_date' | 'invoice_date';
export type DocumentExportType =
  | 'armada'
  | 'aws_batch'
  | 'ex_panda'
  | 'forintsoft'
  | 'hessyn'
  | 'ima'
  | 'infoteka'
  | 'kulcs_konyv'
  | 'maxitax'
  | 'nagy_machinator'
  | 'nav_ptgszlah'
  | 'nav_xml'
  | 'nav_xml_alias'
  | 'novitax'
  | 'proforma_outstanding'
  | 'relax'
  | 'rlb'
  | 'rlb60'
  | 'rlb_double_entry'
  | 'simple_csv'
  | 'simple_excel'
  | 'simple_excel_items'
  | 'tensoft'
  | 'tensoft_29_dot_65';

export type DocumentExportSortBy = 'fulfillment_date' | 'invoice_date' | 'invoice_raw_number';

export type DocumentExportOtherOptions = 'all' | 'expired' | 'outstanding';

export interface LedgerNumberinformation {
  bevetel: string;
  vevo: string;
  penztar: string;
  afa: string;
}

export interface DocumentExportFilterExtra {
  tensoft_vkod: string;
  ledger_number: LedgerNumberinformation;
  forintsoft_konyvelesi_naplo_szam: string;
  positive_ledger_number: string;
  negative_ledger_number: string;
  rlb_kata: boolean;
  rlb_note: string;
  novitax_naplokod: string;
  use_gross_values: boolean;
}

export interface CreateDocumentExport {
  query_type: DocumentExportQueryType;
  start_date: string;
  end_date: string;
  document_block_id: number;
  export_type: DocumentExportType;
  number_start_year: number;
  number_start_sequence: number;
  number_end_year: number;
  number_end_sequence: number;
  payment_method: PaymentMethod;
  sort_by: DocumentExportSortBy;
  other_options: DocumentExportOtherOptions;
  filter_extra: DocumentExportFilterExtra;
}

export type DocumentExportStatusState = 'fail' | 'pending' | 'processing' | 'success' | 'warning';

export interface DocumentExportStatus {
  id: string;
  state: DocumentExportStatusState;
  message: string;
}

export interface OnlineSzamlaStatus {
  transaction_id: string;
  status: string;
  messages: OnlineSzamlaStatusMessage[];
}

export interface OnlineSzamlaStatusMessage {
  validation_result_code?: string;
  validation_error_code?: string;
  human_readable_message?: string;
}

export interface ClientError {
  message: string;
}

export interface ServerError {
  message: string;
  trace_id: string;
}

export interface ValidationError {
  message: string;
  field: string;
}

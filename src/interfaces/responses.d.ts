import { ClientError, ServerError, ValidationError } from "./errors";

export interface ClientErrorResponse {
  error: ClientError;
}

export interface ServerErrorResponse {
  error: ServerError;
}

export interface ValidationErrorResponse {
  errors: ValidationError[];
  message: string;
}

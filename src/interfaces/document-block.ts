import { List } from "./list";

export interface DocumentBlock {
  id?: number;
  name?: string;
  prefix?: string;
  custom_field1?: string;
  custom_field2?: string;
}

export type DocumentBlockList = List<DocumentBlock>;

import { AxiosInstance } from "axios";
import {
  Document,
  DocumentInsert,
  DocumentList,
  DocumentPublicUrl,
} from "../interfaces/document";
import { OnlineSzamlaStatus } from "../interfaces/online-szamla";
import { PaymentHistory } from "../interfaces/payment";
import { SendDocument } from "../interfaces/send-document";

export interface IDocumentApi {
  list: () => Promise<DocumentList>;
  create: (document: DocumentInsert) => Promise<Document>;
  get: (id: number) => Promise<Document>;
  cancel: (id: number) => Promise<Document>;
  createFromProforma: (id: number) => Promise<Document>;
  download: (id: number) => Promise<string>;
  onlineSzamla: (id: number) => Promise<OnlineSzamlaStatus>;
  listPaymentHistory: (id: number) => Promise<PaymentHistory[]>;
  updatePaymentHistory: (
    id: number,
    payments: PaymentHistory[]
  ) => Promise<PaymentHistory[]>;
  deletePaymentHistory: (id: number) => Promise<PaymentHistory[]>;
  publicUrl: (id: number) => Promise<DocumentPublicUrl>;
  send: (id: number, send: SendDocument) => Promise<SendDocument>;
}

export const documentApiFactory = (instance: AxiosInstance): IDocumentApi => {
  return {
    list: () => instance.get<DocumentList>("/documents").then((r) => r.data),
    create: (document: DocumentInsert) =>
      instance.post<Document>("/documents", document).then((r) => r.data),
    get: (id: number) =>
      instance.get<Document>(`/documents/${id}`).then((r) => r.data),
    cancel: (id: number) =>
      instance.post<Document>(`/documents/${id}/cancel`).then((r) => r.data),
    createFromProforma: (id: number) =>
      instance
        .post<Document>(`/documents/${id}/create-from-proforma`)
        .then((r) => r.data),
    download: (id: number) =>
      instance.get<string>(`/documents/${id}/download`).then((r) => r.data),
    onlineSzamla: (id: number) =>
      instance
        .get<OnlineSzamlaStatus>(`/documents/${id}/online-szamla`)
        .then((r) => r.data),
    listPaymentHistory: (id: number) =>
      instance
        .get<PaymentHistory[]>(`/documents/${id}/payments`)
        .then((r) => r.data),
    updatePaymentHistory: (id: number, payments: PaymentHistory[]) =>
      instance
        .put<PaymentHistory[]>(`/documents/${id}/payments`, payments)
        .then((r) => r.data),
    deletePaymentHistory: (id: number) =>
      instance
        .delete<PaymentHistory[]>(`/documents/${id}/payments`)
        .then((r) => r.data),
    publicUrl: (id: number) =>
      instance
        .get<DocumentPublicUrl>(`/documents/${id}/public-url`)
        .then((r) => r.data),
    send: (id: number, send: SendDocument) =>
      instance
        .post<SendDocument>(`/documents/${id}/send`, send)
        .then((r) => r.data),
  };
};

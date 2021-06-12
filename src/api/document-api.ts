import { AxiosInstance } from 'axios';
import { DocumentType, PaymentMethod, PaymentStatus } from '../enums';
import { Document, DocumentInsert, DocumentList, DocumentPublicUrl } from '../interfaces/document';
import { OnlineSzamlaStatus } from '../interfaces/online-szamla';
import { PaymentHistory } from '../interfaces/payment';
import { SendDocument } from '../interfaces/send-document';

export interface DocumentApi {
  list: (
    params: Partial<{
      page: number;
      per_page: number;
      block_id: number;
      partner_id: number;
      payment_method: PaymentMethod;
      payment_status: PaymentStatus;
      start_date: string;
      end_date: string;
      start_number: number;
      end_number: number;
      start_year: string;
      end_year: string;
      type: DocumentType;
    }>,
  ) => Promise<DocumentList>;
  create: (document: DocumentInsert) => Promise<Document>;
  get: (id: number) => Promise<Document>;
  delete: (id: number) => Promise<void>;
  archive: (id: number) => Promise<void>;
  cancel: (id: number) => Promise<Document>;
  copy: (id: number) => Promise<Document>;
  createFromProforma: (id: number) => Promise<Document>;
  createModificationDocument: (id: number) => Promise<Document>;
  download: (id: number) => Promise<string>;
  onlineSzamla: (id: number) => Promise<OnlineSzamlaStatus>;
  listPaymentHistory: (id: number) => Promise<PaymentHistory[]>;
  updatePaymentHistory: (id: number, payments: PaymentHistory[]) => Promise<PaymentHistory[]>;
  deletePaymentHistory: (id: number) => Promise<PaymentHistory[]>;
  printPos: (id: number, size: 58 | 80) => Promise<unknown>;
  publicUrl: (id: number) => Promise<DocumentPublicUrl>;
  send: (id: number, send: SendDocument) => Promise<SendDocument>;
}

export const documentApiFactory = (instance: AxiosInstance): DocumentApi => {
  return {
    list: async (params) =>
      instance
        .get<DocumentList>('/documents', { params })
        .then((r) => r.data),
    create: async (document) => instance.post<Document>('/documents', document).then((r) => r.data),
    get: async (id) => instance.get<Document>(`/documents/${id}`).then((r) => r.data),
    delete: async (id) => instance.delete(`/documents/${id}`),
    archive: async (id) => instance.put(`/documents/${id}/archive`),
    cancel: async (id) => instance.post<Document>(`/documents/${id}/cancel`).then((r) => r.data),
    copy: async (id) => instance.post<Document>(`/documents/${id}/copy`).then((r) => r.data),
    createFromProforma: async (id) =>
      instance.post<Document>(`/documents/${id}/create-from-proforma`).then((r) => r.data),
    createModificationDocument: async (id) =>
      instance.post<Document>(`/documents/${id}/create-modification-document`).then((r) => r.data),

    download: async (id) =>
      instance
        .get<string>(`/documents/${id}/download`, { responseType: 'arraybuffer', responseEncoding: 'binary' } as any)
        .then((r) => r.data),
    onlineSzamla: async (id) => instance.get<OnlineSzamlaStatus>(`/documents/${id}/online-szamla`).then((r) => r.data),
    listPaymentHistory: async (id) => instance.get<PaymentHistory[]>(`/documents/${id}/payments`).then((r) => r.data),
    updatePaymentHistory: async (id, payments) =>
      instance.put<PaymentHistory[]>(`/documents/${id}/payments`, payments).then((r) => r.data),
    deletePaymentHistory: async (id) =>
      instance.delete<PaymentHistory[]>(`/documents/${id}/payments`).then((r) => r.data),
    printPos: async (id, size) =>
      instance
        .get<unknown>(`/documents/${id}/print/pos`, { params: { size } })
        .then((r) => r.data),
    publicUrl: async (id) => instance.get<DocumentPublicUrl>(`/documents/${id}/public-url`).then((r) => r.data),
    send: async (id, send) => instance.post<SendDocument>(`/documents/${id}/send`, send).then((r) => r.data),
  };
};

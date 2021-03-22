import { AxiosInstance } from 'axios';
import { CreateDocumentExport, DocumentExportStatus } from '../interfaces';

export interface DocumentExportApi {
  documentExport: (
    document: CreateDocumentExport,
  ) => Promise<{
    id: string;
  }>;
  documentExportDownload: (id: string) => Promise<string>;
  documentExportPoll: (id: string) => Promise<DocumentExportStatus>;
}

export const documentExportApiFactory = (instance: AxiosInstance): DocumentExportApi => {
  return {
    documentExport: async (document) =>
      instance
        .post<{
          id: string;
        }>('/document-export', document)
        .then((r) => r.data),
    documentExportDownload: async (id) => instance.get<string>(`/document-export/${id}/download`).then((r) => r.data),
    documentExportPoll: async (id) =>
      instance.get<DocumentExportStatus>(`/document-export/${id}/poll`).then((r) => r.data),
  };
};

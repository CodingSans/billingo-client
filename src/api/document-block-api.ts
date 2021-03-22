import { AxiosInstance } from 'axios';
import { DocumentBlockList } from '../interfaces/document-block';

export interface DocumentBlockApi {
  list: (params: Partial<{ page: number; per_page: number }>) => Promise<DocumentBlockList>;
}

export const documentBlockApiFactory = (instance: AxiosInstance): DocumentBlockApi => {
  return {
    list: async (params) =>
      instance
        .get<DocumentBlockList>('/document-blocks', { params })
        .then((r) => r.data),
  };
};

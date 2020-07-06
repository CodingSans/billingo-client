import { AxiosInstance } from 'axios';
import { DocumentBlockList } from '../interfaces/document-block';

export interface DocumentBlockApi {
  list: () => Promise<DocumentBlockList>;
}

export const documentBlockApiFactory = (instance: AxiosInstance): DocumentBlockApi => {
  return {
    list: () => instance.get<DocumentBlockList>('/document-blocks').then((r) => r.data),
  };
};

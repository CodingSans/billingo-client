import { AxiosInstance } from "axios";
import { DocumentBlockList } from "../interfaces/document-block";

export interface IDocumentBlockApi {
  list: () => Promise<DocumentBlockList>;
}

export const documentBlockApiFactory = (
  instance: AxiosInstance
): IDocumentBlockApi => {
  return {
    list: () =>
      instance.get<DocumentBlockList>("/document-blocks").then((r) => r.data),
  };
};

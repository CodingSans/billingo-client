import { AxiosInstance } from "axios";
import { Id } from "../interfaces/id";

export interface IUtilApi {
  getIdFromLegacy: (id: number) => Promise<Id>;
}

export const utilApiFactory = (instance: AxiosInstance): IUtilApi => {
  return {
    getIdFromLegacy: (id: number) =>
      instance.get<Id>(`/utils/convert-legacy-id/${id}`).then((r) => r.data),
  };
};

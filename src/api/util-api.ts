import { AxiosInstance } from 'axios';
import { Id } from '../interfaces/id';

export interface UtilApi {
  getIdFromLegacy: (id: number) => Promise<Id>;
}

export const utilApiFactory = (instance: AxiosInstance): UtilApi => {
  return {
    getIdFromLegacy: (id: number) => instance.get<Id>(`/utils/convert-legacy-id/${id}`).then((r) => r.data),
  };
};

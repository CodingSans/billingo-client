import { AxiosInstance } from 'axios';
import { Id } from '../interfaces/id';
import { TaxNumber } from '../interfaces';

export interface UtilApi {
  getIdFromLegacy: (id: number) => Promise<Id>;
  checkTaxNumber: (taxNumber: string) => Promise<TaxNumber>;
}

export const utilApiFactory = (instance: AxiosInstance): UtilApi => {
  return {
    getIdFromLegacy: async (id) => instance.get<Id>(`/utils/convert-legacy-id/${id}`).then((r) => r.data),
    checkTaxNumber: async (taxNumber) =>
      instance.get<TaxNumber>(`/utils/check-tax-number/${taxNumber}`).then((r) => r.data),
  };
};

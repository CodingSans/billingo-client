import { AxiosInstance } from 'axios';
import { Currency } from '../enums/currency';
import { ConversationRate } from '../interfaces/conversation-rate';

export interface CurrencyApi {
  getConversionRate: (params: { from: Currency; to: Currency; date?: string }) => Promise<ConversationRate>;
}

export const currencyApiFactory = (instance: AxiosInstance): CurrencyApi => {
  return {
    getConversionRate: async (params) =>
      instance
        .get<ConversationRate>(`/currencies`, { params })
        .then((r) => r.data),
  };
};

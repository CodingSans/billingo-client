import { AxiosInstance } from 'axios';
import { Currency } from '../enums/currency';
import { ConversationRate } from '../interfaces/conversation-rate';

export interface CurrencyApi {
  getConversionRate: (from: Currency, to: Currency) => Promise<ConversationRate>;
}

export const currencyApiFactory = (instance: AxiosInstance): CurrencyApi => {
  return {
    getConversionRate: (from: Currency, to: Currency) =>
      instance.get<ConversationRate>(`/currencies?from=${from}&to=${to}`).then((r) => r.data),
  };
};

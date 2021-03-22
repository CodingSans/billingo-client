import { AxiosInstance } from 'axios';
import { Spending, SpendingList } from '../interfaces';

export interface SpendingApi {
  list: (
    params: Partial<{
      page: number;
      per_page: number;
    }>,
  ) => Promise<SpendingList>;
  create: (spending: Spending) => Promise<Spending>;
  get: (id: number) => Promise<Spending>;
  update: (id: number, spending: Spending) => Promise<Spending>;
  delete: (id: number) => Promise<void>;
}

export const spendingApiFactory = (instance: AxiosInstance): SpendingApi => {
  return {
    list: async (params) =>
      instance
        .get<SpendingList>('/spendings', { params })
        .then((r) => r.data),
    create: async (spending) => instance.post<Spending>('/spendings', spending).then((r) => r.data),
    get: async (id) => instance.get<Spending>(`/spendings/${id}`).then((r) => r.data),
    update: async (id, spending) => instance.put<Spending>(`/spendings/${id}`, spending).then((r) => r.data),
    delete: async (id) => instance.delete<void>(`/spendings/${id}`).then((r) => r.data),
  };
};

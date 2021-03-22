import { AxiosInstance } from 'axios';
import { BankAccount, BankAccountList } from '../interfaces/bank-account';

export interface BankAccountApi {
  list: (
    params: Partial<{
      page: number;
      per_page: number;
    }>,
  ) => Promise<BankAccountList>;
  create: (bankAccount: BankAccount) => Promise<BankAccount>;
  get: (id: number) => Promise<BankAccount>;
  update: (id: number, bankAccount: BankAccount) => Promise<BankAccount>;
  delete: (id: number) => Promise<void>;
}

export const bankAccountApiFactory = (instance: AxiosInstance): BankAccountApi => {
  return {
    list: async (params) =>
      instance
        .get<BankAccountList>('/bank-accounts', { params })
        .then((r) => r.data),
    create: async (bankAccount) => instance.post<BankAccount>('/bank-accounts', bankAccount).then((r) => r.data),
    get: async (id) => instance.get<BankAccount>(`/bank-accounts/${id}`).then((r) => r.data),
    update: async (id, bankAccount) =>
      instance.put<BankAccount>(`/bank-accounts/${id}`, bankAccount).then((r) => r.data),
    delete: async (id) => instance.delete<void>(`/bank-accounts/${id}`).then((r) => r.data),
  };
};

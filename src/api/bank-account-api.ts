import { AxiosInstance } from "axios";
import { BankAccount, BankAccountList } from "../interfaces/bank-account";

export interface IBankAccountApi {
  list: () => Promise<BankAccountList>;
  create: (bankAccount: BankAccount) => Promise<BankAccount>;
  get: (id: number) => Promise<BankAccount>;
  update: (id: number, bankAccount: BankAccount) => Promise<BankAccount>;
  delete: (id: number) => Promise<void>;
}

export const bankAccountApiFactory = (
  instance: AxiosInstance
): IBankAccountApi => {
  return {
    list: () =>
      instance.get<BankAccountList>("/bank-accounts").then((r) => r.data),
    create: (bankAccount: BankAccount) =>
      instance
        .post<BankAccount>("/bank-accounts", bankAccount)
        .then((r) => r.data),
    get: (id: number) =>
      instance.get<BankAccount>(`/bank-accounts/${id}`).then((r) => r.data),
    update: (id: number, bankAccount: BankAccount) =>
      instance
        .put<BankAccount>(`/bank-accounts/${id}`, bankAccount)
        .then((r) => r.data),
    delete: (id: number) =>
      instance.delete<void>(`/bank-accounts/${id}`).then((r) => r.data),
  };
};

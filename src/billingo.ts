import axios from 'axios';
import { documentApiFactory, DocumentApi } from './api/document-api';
import { documentBlockApiFactory, DocumentBlockApi } from './api/document-block-api';
import { partnerApiFactory, PartnerApi } from './api/partner-api';
import { productApiFactory, ProductApi } from './api/product-api';
import { bankAccountApiFactory, BankAccountApi } from './api/bank-account-api';
import { currencyApiFactory, CurrencyApi } from './api/currency-api';
import { organizationApiFactory, OrganizationApi } from './api/organization-api';
import { utilApiFactory, UtilApi } from './api/util-api';

export interface BillingoParams {
  apiKey: string;
}

export interface BillingoClient {
  documents: DocumentApi;
  documentBlocks: DocumentBlockApi;
  partners: PartnerApi;
  products: ProductApi;
  bankAccounts: BankAccountApi;
  currencies: CurrencyApi;
  organization: OrganizationApi;
  utils: UtilApi;
}

export const BillingoClient = (params: BillingoParams): BillingoClient => {
  const baseURL = 'https://api.billingo.hu/v3';

  const instance = axios.create({
    baseURL,
    withCredentials: true,
  });

  instance.interceptors.request.use((config) => ({
    ...config,
    headers: {
      ...config.headers,
      'X-API-KEY': params.apiKey,
    },
  }));

  return {
    documents: documentApiFactory(instance),
    documentBlocks: documentBlockApiFactory(instance),
    partners: partnerApiFactory(instance),
    products: productApiFactory(instance),
    bankAccounts: bankAccountApiFactory(instance),
    currencies: currencyApiFactory(instance),
    organization: organizationApiFactory(instance),
    utils: utilApiFactory(instance),
  };
};

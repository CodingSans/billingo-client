import axios from "axios";
import jwt from "jwt-simple";
import md5 from "md5";
import { documentApiFactory } from "./api/document-api";
import { documentBlockApiFactory } from "./api/document-block-api";
import { partnerApiFactory } from "./api/partner-api";
import { productApiFactory } from "./api/product-api";
import { bankAccountApiFactory } from "./api/bank-account-api";
import { currencyApiFactory } from "./api/currency-api";
import { organizationApiFactory } from "./api/organization-api";
import { utilApiFactory } from "./api/util-api";

export interface BillingoParams {
  publicKey: string;
  secret: string;
  url?: string;
  withCredentials?: boolean;
}

export const BillingoClient = (params: BillingoParams) => {
  const baseURL = params.url || "https://api.billingo.hu/v3";
  const publicKey = params.publicKey || "";
  const secret = params.secret || "";
  const withCredentials = params.withCredentials === true ? true : false;

  const instance = axios.create({
    baseURL,
    withCredentials,
  });

  instance.interceptors.request.use((config) => ({
    ...config,
    headers: {
      ...config.headers,
      "X-API-KEY": generateToken(publicKey, secret),
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

const generateToken = (publicKey: string, secret: string) => {
  const ts = Math.floor(new Date().getTime() / 1000) - 10;

  return jwt.encode(
    {
      sub: publicKey,
      iat: ts,
      exp: ts + 60,
      iss: "billingo-client",
      jti: md5(publicKey + ts),
    },
    secret
  );
};

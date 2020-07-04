import { AxiosInstance } from "axios";
import { Product, ProductList } from "../interfaces/product";

export interface IProductApi {
  list: () => Promise<ProductList>;
  create: (product: Product) => Promise<Product>;
  get: (id: number) => Promise<Product>;
  update: (id: number, product: Product) => Promise<Product>;
  delete: (id: number) => Promise<void>;
}

export const productApiFactory = (instance: AxiosInstance): IProductApi => {
  return {
    list: () => instance.get<ProductList>("/products").then((r) => r.data),
    create: (product: Product) =>
      instance.post<Product>("/products", product).then((r) => r.data),
    get: (id: number) =>
      instance.get<Product>(`/products/${id}`).then((r) => r.data),
    update: (id: number, product: Product) =>
      instance.put<Product>(`/products/${id}`, product).then((r) => r.data),
    delete: (id: number) =>
      instance.delete<void>(`/products/${id}`).then((r) => r.data),
  };
};

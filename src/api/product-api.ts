import { AxiosInstance } from 'axios';
import { Product, ProductList } from '../interfaces/product';

export interface ProductApi {
  list: (params: Partial<{ page: number; per_page: number; query: string }>) => Promise<ProductList>;
  create: (product: Product) => Promise<Product>;
  get: (id: number) => Promise<Product>;
  update: (id: number, product: Product) => Promise<Product>;
  delete: (id: number) => Promise<void>;
}

export const productApiFactory = (instance: AxiosInstance): ProductApi => {
  return {
    list: async (params) =>
      instance
        .get<ProductList>('/products', { params })
        .then((r) => r.data),
    create: async (product) => instance.post<Product>('/products', product).then((r) => r.data),
    get: async (id) => instance.get<Product>(`/products/${id}`).then((r) => r.data),
    update: async (id, product) => instance.put<Product>(`/products/${id}`, product).then((r) => r.data),
    delete: async (id) => instance.delete<void>(`/products/${id}`).then((r) => r.data),
  };
};

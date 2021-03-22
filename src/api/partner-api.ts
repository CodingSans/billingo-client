import { AxiosInstance } from 'axios';
import { Partner, PartnerList, PartnerUpsert } from '../interfaces/partner';

export interface PartnerApi {
  list: (params: Partial<{ page: number; per_page: number; query: string }>) => Promise<PartnerList>;
  create: (partner: PartnerUpsert) => Promise<Partner>;
  get: (id: number) => Promise<Partner>;
  update: (id: number, partner: PartnerUpsert) => Promise<Partner>;
  delete: (id: number) => Promise<void>;
}

export const partnerApiFactory = (instance: AxiosInstance): PartnerApi => {
  return {
    list: async (params) =>
      instance
        .get<PartnerList>('/partners', { params })
        .then((r) => r.data),
    create: async (partner) => instance.post<Partner>('/partners', partner).then((r) => r.data),
    get: async (id) => instance.get<Partner>(`/partners/${id}`).then((r) => r.data),
    update: async (id, partner) => instance.put<Partner>(`/partners/${id}`, partner).then((r) => r.data),
    delete: async (id) => instance.delete<void>(`/partners/${id}`).then((r) => r.data),
  };
};

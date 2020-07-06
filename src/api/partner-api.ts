import { AxiosInstance } from 'axios';
import { Partner, PartnerList, PartnerUpsert } from '../interfaces/partner';

export interface PartnerApi {
  list: () => Promise<PartnerList>;
  create: (partner: PartnerUpsert) => Promise<Partner>;
  get: (id: number) => Promise<Partner>;
  update: (id: number, partner: PartnerUpsert) => Promise<Partner>;
  delete: (id: number) => Promise<void>;
}

export const partnerApiFactory = (instance: AxiosInstance): PartnerApi => {
  return {
    list: () => instance.get<PartnerList>('/partners').then((r) => r.data),
    create: (partner: PartnerUpsert) => instance.post<Partner>('/partners', partner).then((r) => r.data),
    get: (id: number) => instance.get<Partner>(`/partners/${id}`).then((r) => r.data),
    update: (id: number, partner: PartnerUpsert) =>
      instance.put<Partner>(`/partners/${id}`, partner).then((r) => r.data),
    delete: (id: number) => instance.delete<void>(`/partners/${id}`).then((r) => r.data),
  };
};

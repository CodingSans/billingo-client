import { AxiosInstance } from 'axios';
import { OrganizationData } from '../interfaces/organization-data';

export interface OrganizationApi {
  get: () => Promise<OrganizationData>;
}

export const organizationApiFactory = (instance: AxiosInstance): OrganizationApi => {
  return {
    get: () => instance.get<OrganizationData>(`/organization`).then((r) => r.data),
  };
};

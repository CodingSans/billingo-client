import { AxiosInstance } from "axios";
import { OrganizationData } from "../interfaces/organization-data";

export interface IOrganizationApi {
  get: () => Promise<OrganizationData>;
}

export const organizationApiFactory = (
  instance: AxiosInstance
): IOrganizationApi => {
  return {
    get: () =>
      instance.get<OrganizationData>(`/organization`).then((r) => r.data),
  };
};

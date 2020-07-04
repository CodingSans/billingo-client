import { Country } from "../enums/country";

export interface Address {
  country_code: Country;
  post_code: string;
  city: string;
  address: string;
}

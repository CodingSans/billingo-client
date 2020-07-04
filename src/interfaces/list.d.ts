export interface List<T> {
  data: T[];
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  prev_page_url: string;
  next_page_url: string;
}

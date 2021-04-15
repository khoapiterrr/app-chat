export interface Filters {
  [key: string]: string | number;
}

export interface Sorts {
  [key: string]: string | number;
}

export interface ParamsRequest {
  page: number;
  offset: number;
  size: number;
  filters: Filters;
  sorts: Sorts;
  keyword: string;
}

export interface Pagination {
  items: Array;
  total: number;
  page: number;
  size: number;
}

export interface DefaultObject {
  $and?: unknown[];
  $or?: unknown[];
  [key: string]: string | boolean | number | unknown;
}

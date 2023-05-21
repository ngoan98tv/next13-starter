export interface SortOptions<T> {
  sortBy: keyof T;
  sortOrder: "asc" | "desc";
}

export type ListOptions<T = any> = Partial<T> & {
  limit?: number;
  offset?: number;
  search?: string;
  sortBy?: keyof T;
  sortOrder?: "asc" | "desc";
};

export interface ListResponse<T> {
  items: T[];
  total: number;
  options: ListOptions<T>;
}

export interface ErrorResponse<T> {
  code: string;
  message: string;
  details: {
    [Key in keyof T]: string;
  };
}

export type FetchArgs =
  | string
  | {
      path: string;
      params?: {
        [key: string]: any;
      };
    };

export type FetchMethod = "GET" | "POST" | "PUT" | "DELETE";

export type FetchOptions<T> = {
  method?: FetchMethod;
  headers?: {
    [key: string]: string;
  };
  body?: any;
  onSuccess?: (data: T) => void;
  onError?: (error: ErrorResponse<T>) => void;
};

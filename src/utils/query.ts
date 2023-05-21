import { appConfig } from "@/config/env";
import { ListOptions } from "@/types/shared";

export function buildQueryString(options?: ListOptions) {
  if (!options) {
    return "";
  }

  let queryString = `?`;

  for (const key in options) {
    const value = options[key];
    queryString += `${key}=${value}&`;
  }

  return queryString.slice(0, -1);
}

export function extractQueryParams(path: string) {
  const url = new URL(path, appConfig.API_HOST || "http://localhost:3000");
  if (url.searchParams.size == 0) {
    return {};
  }

  const params = {} as Record<string, string>;

  url.searchParams.forEach((value, key) => (params[key] = value));

  return params;
}

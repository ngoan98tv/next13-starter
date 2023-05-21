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

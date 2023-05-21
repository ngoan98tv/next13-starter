import { appConfig } from "@/config";
import { FetchArgs, FetchOptions } from "@/types/shared";
import { buildQueryString } from "@/utils/query";

export function fetcher<T>(
  args: FetchArgs,
  options?: FetchOptions<T>
): Promise<T> {
  let url = appConfig.API_HOST;
  let body;
  let headers = {
    "Content-Type": "application/json",
  };

  if (typeof args == "string") {
    url += args;
  } else {
    url += args.path + buildQueryString(args.params);
  }

  if (options?.body) {
    if (options.body instanceof FormData) {
      body = options.body;
      headers["Content-Type"] = "application/x-www-form-urlencoded";
    } else {
      body = JSON.stringify(options.body);
    }
  }

  return fetch(url, {
    method: options?.method || "GET",
    credentials: "include", // include, same-origin, omit
    mode: "cors", // no-cors, cors, same-origin
    headers: {
      ...headers,
      ...options?.headers,
    },
    body,
  }).then((res) => res.json());
}

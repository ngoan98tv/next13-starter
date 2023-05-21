import { ListOptions } from "@/types/shared";
import { User } from "@/types/user";
import { buildQueryString } from "@/utils/query";

// prettier-ignore
export const apiPath = {
  userList: (options?: ListOptions<User>) => `/api/users/${buildQueryString(options)}`,
  userDetail: (id: string) => `/api/users/${id}`,
};

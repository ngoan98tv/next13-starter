import { apiPath } from "@/config/api";
import { fetcher } from "@/utils/fetcher";
import { ListOptions, ListResponse } from "@/types/shared";
import { User, UserCreateInput, UserUpdateInput } from "@/types/user";

export function fetchUserList(params: ListOptions<User>) {
  return fetcher<ListResponse<User>>(apiPath.userList(params));
}

export function fetchUserDetail(id: string) {
  return fetcher<User>(apiPath.userDetail(id));
}

export function updateUser(id: string, body: UserUpdateInput) {
  return fetcher<User>(apiPath.userDetail(id), { method: "PUT", body });
}

export function createUser(body: UserCreateInput) {
  return fetcher<User>(apiPath.userList(), { method: "POST", body });
}

export function removeUser(id: string) {
  return fetcher<User>(apiPath.userDetail(id), { method: "DELETE" });
}

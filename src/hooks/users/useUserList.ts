import "client-only";
import { ErrorResponse, ListOptions, ListResponse } from "@/types/shared";
import useQuery from "../useQuery";
import { User } from "@/types/user";
import { apiPath } from "@/config/api";

function useUserList(params?: ListOptions<User>) {
  return useQuery<ListResponse<User>, ErrorResponse<ListOptions>>(
    apiPath.userList(params)
  );
}

export default useUserList;

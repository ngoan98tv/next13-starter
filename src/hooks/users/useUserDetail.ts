import "client-only";
import { ErrorResponse } from "@/types/shared";
import { User } from "@/types/user";
import useQuery from "../useQuery";
import { apiPath } from "@/api";

function useUserDetail(id: string) {
  return useQuery<User, ErrorResponse<User>>(apiPath.userDetail(id));
}

export default useUserDetail;

import "client-only";
import { User, UserUpdateInput } from "@/types/user";
import useMutation from "../useMutation";
import { apiPath } from "@/api";

function useUserUpdate(id: string) {
  return useMutation<User, UserUpdateInput>(apiPath.userDetail(id), {
    method: "PUT",
  });
}

export default useUserUpdate;

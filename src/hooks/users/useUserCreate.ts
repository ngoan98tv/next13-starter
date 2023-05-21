import "client-only";
import useMutation from "../useMutation";
import { User, UserCreateInput } from "@/types/user";
import { apiPath } from "@/api";

function useUserCreate() {
  return useMutation<User, UserCreateInput>(apiPath.userList(), {
    method: "POST",
  });
}

export default useUserCreate;

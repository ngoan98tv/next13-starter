import "client-only";
import { fetcher } from "@/utils/fetcher";
import { ErrorResponse, FetchOptions } from "@/types/shared";
import useSWRMutation from "swr/mutation";

function useMutation<Data, Params>(path: string, options?: FetchOptions<Data>) {
  return useSWRMutation<Data, ErrorResponse<Data>, any, Params>(
    path,
    (apiPath: string, { arg }: any) => fetcher<Data>(apiPath, { body: arg }),
    {
      onError: options?.onError,
      onSuccess: options?.onSuccess,
    }
  );
}

export default useMutation;

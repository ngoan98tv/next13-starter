import "client-only";
import { FetchArgs } from "@/types/shared";
import useSWR from "swr";

function useQuery<Data, Err>(args: FetchArgs) {
  return useSWR<Data, Err>(args);
}

export default useQuery;

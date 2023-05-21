import { fetcher } from "@/utils/fetcher";
import React, { ReactNode } from "react";
import { SWRConfig } from "swr";

type Props = {
  children: ReactNode;
};

function SWRProvider({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
}

export default SWRProvider;

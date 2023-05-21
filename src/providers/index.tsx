"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { EmotionCacheProvider } from "./EmotionCacheProvider";
import { theme } from "@/config/theme";
import SWRProvider from "./SWRProvider";
import mockAPI from "@/mocks";

type Props = {
  children: React.ReactNode;
};

function AppProviders({ children }: Props) {
  useEffect(() => {
    if (typeof window != "undefined") {
      mockAPI();
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <EmotionCacheProvider options={{ key: "mui-css" }}>
        <ThemeProvider theme={theme}>
          <SWRProvider>{children}</SWRProvider>
        </ThemeProvider>
      </EmotionCacheProvider>
    </>
  );
}

export default AppProviders;

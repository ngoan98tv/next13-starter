"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { EmotionCacheProvider } from "./EmotionCacheProvider";
import { theme } from "@/theme";
import SWRProvider from "./SWRProvider";

type Props = {
  children: React.ReactNode;
};

function AppProviders({ children }: Props) {
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

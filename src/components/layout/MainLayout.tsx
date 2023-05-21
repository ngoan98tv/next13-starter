"use client";

import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import MainFooter from "./MainFooter";

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <ResponsiveAppBar />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <MainFooter />
    </>
  );
}

export default MainLayout;

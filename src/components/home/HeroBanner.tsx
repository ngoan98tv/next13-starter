"use client";

import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import homeBannerImage from "@/assets/images/home-banner.jpg";

function HeroBanner() {
  return (
    <Container>
      <Image
        src={homeBannerImage}
        alt={""}
      />
    </Container>
  );
}

export default HeroBanner;

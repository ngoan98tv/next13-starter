"use client";

import { Box, Container, Slide, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import homeBannerImage from "@/assets/images/home-banner.jpg";

function HeroBanner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Container
      maxWidth={false}
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <Image
        src={homeBannerImage}
        alt={""}
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <Toolbar />
      <Box sx={{ position: "absolute", top: "25%", right: "5%", left: "5%" }}>
        <Slide
          direction="right"
          in={mounted}
          mountOnEnter
          timeout={400}
        >
          <Typography
            variant="h1"
            sx={{
              color: "secondary.contrastText",
              textAlign: "center",
              mb: 2,
            }}
          >
            Hello World!
          </Typography>
        </Slide>
        <Slide
          direction="left"
          in={mounted}
          mountOnEnter
          timeout={800}
        >
          <Typography
            variant="overline"
            sx={{
              color: "secondary.contrastText",
              textAlign: "center",
              fontSize: "h5.fontSize",
              display: "block",
            }}
          >
            {"Let's build an amazing application"}
          </Typography>
        </Slide>
      </Box>
    </Container>
  );
}

export default HeroBanner;

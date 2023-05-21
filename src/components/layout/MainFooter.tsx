"use client";
import { Container, Divider, Typography } from "@mui/material";
import React from "react";

function MainFooter() {
  return (
    <Container
      maxWidth="xl"
      component={"footer"}
      sx={{ pb: 4 }}
    >
      <Divider sx={{ my: 3 }} />
      <Typography
        textAlign={"center"}
        color={"textSecondary"}
      >
        Next App
      </Typography>
      <Typography
        textAlign={"center"}
        color={"textSecondary"}
      >
        Powered by NextJS 13
      </Typography>
    </Container>
  );
}

export default MainFooter;

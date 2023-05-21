"use client";

import { Alert, Button, Container, Typography } from "@mui/material";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h4"
        lineHeight={2}
        color={"error"}
        sx={{
          my: 2,
          fontWeight: 700,
        }}
      >
        Error:
      </Typography>
      <Alert
        variant="standard"
        severity="error"
        sx={{
          mb: 5,
        }}
      >
        {error.message}
      </Alert>
      <Button
        variant="outlined"
        onClick={() => reset()}
      >
        Try again
      </Button>
    </Container>
  );
}

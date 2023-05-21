"use client";

import { Container, Grid, Paper, Typography } from "@mui/material";
import Icon1 from "@mui/icons-material/Thunderstorm";

function AppFeatures() {
  return (
    <Container
      maxWidth="xl"
      sx={{ minHeight: 400, py: 5 }}
    >
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
        >
          <Typography
            variant="h3"
            textAlign={"center"}
            sx={{ mb: 3 }}
          >
            Feature Showcase
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Paper sx={{ p: 2 }}>
            <Icon1
              sx={{ fontSize: 64 }}
              color="disabled"
            />
            <Typography
              variant="h5"
              lineHeight={2}
            >
              Excellent created feature
            </Typography>
            <Typography color={"textSecondary"}>
              The automobile layout consists of a front-engine design, with
              transaxle-type transmissions mounted at the rear of the engine and
              four wheel drive
            </Typography>
          </Paper>
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Paper sx={{ p: 2 }}>
            <Icon1
              sx={{ fontSize: 64 }}
              color="disabled"
            />
            <Typography
              variant="h5"
              lineHeight={2}
            >
              Excellent created feature
            </Typography>
            <Typography color={"textSecondary"}>
              The automobile layout consists of a front-engine design, with
              transaxle-type transmissions mounted at the rear of the engine and
              four wheel drive
            </Typography>
          </Paper>
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Paper sx={{ p: 2 }}>
            <Icon1
              sx={{ fontSize: 64 }}
              color="disabled"
            />
            <Typography
              variant="h5"
              lineHeight={2}
            >
              Excellent created feature
            </Typography>
            <Typography color={"textSecondary"}>
              The automobile layout consists of a front-engine design, with
              transaxle-type transmissions mounted at the rear of the engine and
              four wheel drive
            </Typography>
          </Paper>
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Paper sx={{ p: 2 }}>
            <Icon1
              sx={{ fontSize: 64 }}
              color="disabled"
            />
            <Typography
              variant="h5"
              lineHeight={2}
            >
              Excellent created feature
            </Typography>
            <Typography color={"textSecondary"}>
              The automobile layout consists of a front-engine design, with
              transaxle-type transmissions mounted at the rear of the engine and
              four wheel drive
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AppFeatures;

"use client";

import useUserList from "@/hooks/users/useUserList";
import React from "react";
import BoxLoading from "../shared/BoxLoading";
import {
  Alert,
  Avatar,
  Button,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";

function UserList() {
  const { data, isLoading, error } = useUserList({ limit: 10, offset: 0 });

  return (
    <Container
      maxWidth="xl"
      sx={{ py: 3 }}
    >
      <Typography
        variant="h3"
        lineHeight={2}
      >
        People
      </Typography>
      {isLoading && <BoxLoading />}
      {!isLoading && error && <Alert severity="error">{error?.message}</Alert>}
      <List disablePadding>
        {data?.items.map((item) => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar>
                <Image
                  src={item.avatar}
                  alt=""
                  fill
                  sizes="40px"
                  unoptimized
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.displayName}
              secondary={item.email}
            />
            <ListItemSecondaryAction>
              <Button>Detail</Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default UserList;

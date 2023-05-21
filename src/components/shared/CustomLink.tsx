import { Link, LinkProps } from "@mui/material";
import React from "react";
import NextLink from "next/link";

function CustomLink({ href, ...props }: LinkProps & { href: string }) {
  return (
    <NextLink
      href={href}
      legacyBehavior
      passHref
    >
      <Link {...props} />
    </NextLink>
  );
}

export default CustomLink;

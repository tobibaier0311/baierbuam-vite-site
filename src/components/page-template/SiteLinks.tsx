import { Stack } from "@mui/material";
import React from "react";
import { Brand } from "../brand/Brand";
import { NavItem } from "../nav-item/nav-item";

export default function SiteLinks() {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <Brand />
      <NavItem isLarge text="Über uns" to="/" />
      <NavItem isLarge text="Termine" to="/gigs" />
      <NavItem isLarge text="Galerie" to="/images" />
      <NavItem isLarge text="Kontakt" to="/contact" />
    </Stack>
  );
}

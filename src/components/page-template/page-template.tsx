import { Box, Button, Drawer, Stack } from "@mui/material";
import React, { Children, useState } from "react";
import { Outlet } from "react-router-dom";

import "./page-template.css";
import Icons from "./Icons";
import SiteLinks from "./SiteLinks";
import NavBar from "./NavBar";
import { MenuDrawer } from "../menu-drawer/menu-drawer";

export function PageTemplate() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <Outlet />
    </Box>
  );
}

import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import "./page-template.css";
import NavBar from "./NavBar";

export function PageTemplate() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <Outlet />
    </Box>
  );
}

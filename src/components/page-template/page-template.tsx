import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import "./page-template.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

export function PageTemplate() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <NavBar />
      <div className="outlet">
        <Outlet />
      </div>

      <Footer />
    </Box>
  );
}

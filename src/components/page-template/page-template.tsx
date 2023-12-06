import { Box, Divider, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import "./page-template.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

export function PageTemplate() {
  return (
    <>
      <NavBar />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

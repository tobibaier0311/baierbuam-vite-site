import Logo from "../../assets/logo1.png";
import React from "react";

import "./brand.css";
import { Avatar } from "@mui/material";

export function Brand() {
  return <Avatar src={Logo} sx={{ width: "10rem", height: "10rem" }} />;
}

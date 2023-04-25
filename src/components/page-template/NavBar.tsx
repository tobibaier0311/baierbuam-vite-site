import { Stack } from "@mui/material";
import React from "react";
import SiteLinks from "./SiteLinks";

import Logo from "../../assets/logo1.png";

import { Brand } from "../brand/Brand";

import "./NavBar.css";
import { MenuDrawer } from "../menu-drawer/menu-drawer";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="brand">
        <Brand />
      </div>

      <img src={Logo} width="80px" className="Logo" />
      <div className="Links">
        <SiteLinks />
      </div>
      <div className="Icon">
        <MenuDrawer />
      </div>
    </div>
  );
}

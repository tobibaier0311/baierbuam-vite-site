import { Container, Stack } from "@mui/material";
import React from "react";
import SiteLinks from "./SiteLinks";

import Logo from "../../assets/Logo.png";

import { Brand } from "../brand/Brand";

import "./NavBar.css";
import { MenuDrawer } from "../menu-drawer/menu-drawer";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const to = useNavigate();
  return (
    <Container>
      <div className="NavBar">
        <a onClick={() => to("/")} className="brand">
          <Brand />
          <h1 style={{ textDecoration: "none" }}>Baierbuam And Friends</h1>
        </a>
        <img src={Logo} width="80px" className="Logo" />
        <div className="Links">
          <SiteLinks />
        </div>
        <div className="Icon">
          <MenuDrawer />
        </div>
      </div>
    </Container>
  );
}

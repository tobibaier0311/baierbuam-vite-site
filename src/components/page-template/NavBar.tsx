import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import SiteLinks from "./SiteLinks";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../../assets/Logo.png";

import { Brand } from "../brand/Brand";

import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { NavItem } from "../nav-item/nav-item";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const to = useNavigate();

  return (
    <>
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
          <div className="icon">
            <IconButton onClick={() => setOpen(true)} sx={{ color: "#121212" }}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </Container>
      <Drawer open={open} anchor="right" variant="persistent">
        <div
          style={{
            height: "89px",
            display: "flex",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          <IconButton edge="end" onClick={() => setOpen(false)}>
            <ChevronRight />
          </IconButton>
        </div>
        <Box
          sx={{
            width: 150,
            padding: "0 1rem",
          }}
        >
          <Divider sx={{ alignSelf: "stretch" }} />
          <Stack
            direction="column"
            alignItems="start"
            onClick={() => setOpen(false)}
          >
            <NavItem to="/" text="Home" />
            <NavItem to="/gigs" text="Termine" />
            <NavItem to="/images" text="Galerie" />
            <NavItem to="/contact" text="Kontakt" />
          </Stack>
          <Divider sx={{ alignSelf: "stretch" }} />
        </Box>
      </Drawer>
    </>
  );
}

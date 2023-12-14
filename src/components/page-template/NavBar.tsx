import {
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import SiteLinks from "./SiteLinks";
import MenuIcon from "@mui/icons-material/Menu";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import { Brand } from "../brand/Brand";

import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { NavItem } from "../nav-item/nav-item";
import { ChevronRight } from "@mui/icons-material";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const to = useNavigate();

  return (
    <div>
      <div className="nav-container">
        <Container>
          <div className="NavBar">
            <a onClick={() => to("/")} className="brand">
              <div className="brand-image">
                <Brand />
              </div>

              <h2
                className="nav-title"
                style={{ textDecoration: "none", color: "#121212" }}
              >
                Baierbuam And Friends
              </h2>
            </a>
            <div className="Links">
              <SiteLinks />
            </div>
            <div className="icon">
              <IconButton
                onClick={() => setOpen(true)}
                sx={{ color: "#121212" }}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>
            </div>
          </div>
        </Container>
      </div>
      <Drawer
        open={open}
        anchor="right"
        variant="temporary"
        onClose={() => setOpen(false)}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "80px",
            padding: "1rem",
          }}
        >
          <IconButton edge="end" onClick={() => setOpen(false)}>
            <ChevronRight fontSize="large" />
          </IconButton>
        </div>
        <Box
          sx={{
            width: 200,
            padding: "0 1rem",
          }}
        >
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
          <Stack gap="0.5rem" direction="row" sx={{ padding: "1rem 0" }}>
            <Tooltip title="Instagram">
              <IconButton href="https://www.instagram.com/baierbuamandfriends">
                <InstagramIcon className="IconButton" fontSize="medium" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Facebook">
              <IconButton href="https://www.facebook.com/baierbuamandfriends">
                <FacebookIcon className="IconButton" fontSize="medium" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>
      </Drawer>
    </div>
  );
}

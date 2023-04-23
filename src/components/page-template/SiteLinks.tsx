import { IconButton, Stack, Tooltip } from "@mui/material";
import React from "react";
import { Brand } from "../brand/Brand";
import { NavItem } from "../nav-item/nav-item";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./SiteLinks.css";

export default function SiteLinks() {
  return (
    <div className="links">
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <NavItem text="Home" to="/" />
        <NavItem text="Über uns" to="/about" />
        <NavItem text="Termine" to="/gigs" />
        <NavItem text="Galerie" to="/images" />
        <NavItem text="Kontakt" to="/contact" />
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
        <Tooltip title="Youtube">
          <IconButton>
            <YouTubeIcon className="IconButton" fontSize="medium" />
          </IconButton>
        </Tooltip>
      </Stack>
    </div>
  );
}

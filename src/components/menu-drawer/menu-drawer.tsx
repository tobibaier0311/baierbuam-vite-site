import { Drawer, IconButton, Tooltip } from "@mui/material";
import { Stack } from "@mui/system";
import { NavItem } from "../nav-item/nav-item";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./menu-drawer.css";
import { useState } from "react";

export const MenuDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="iconDrawer">
      <IconButton onClick={toggleDrawer} className="burger">
        <MenuIcon fontSize="large" />
      </IconButton>
      {open && (
        <Drawer elevation={3} open={open} variant="persistent" anchor="right">
          <Stack
            className="drawer"
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <IconButton onClick={toggleDrawer} className="closeButton">
              <CloseIcon />
            </IconButton>
            <NavItem
              handleClose={toggleDrawer}
              isLarge
              text="Über uns"
              to="/"
            />
            <NavItem
              handleClose={toggleDrawer}
              isLarge
              text="Termine"
              to="/gigs"
            />
            <NavItem
              handleClose={toggleDrawer}
              isLarge
              text="Galerie"
              to="/images"
            />
            <NavItem
              handleClose={toggleDrawer}
              isLarge
              text="Kontakt"
              to="/contact"
            />
            <Tooltip title="Instagram">
              <IconButton href="https://www.instagram.com/baierbuamandfriends">
                <InstagramIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Facebook">
              <IconButton href="https://www.facebook.com/baierbuamandfriends">
                <FacebookIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Youtube">
              <IconButton>
                <YouTubeIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Drawer>
      )}
    </div>
  );
};

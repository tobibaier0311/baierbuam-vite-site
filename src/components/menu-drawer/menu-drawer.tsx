import { Drawer, IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import { NavItem } from "../nav-item/nav-item";
import Icons from "../page-template/Icons";
import SiteLinks from "../page-template/SiteLinks";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./menu-drawer.css";
import { useState } from "react";

export const MenuDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  console.log(open);

  return (
    <div className="iconDrawer">
      <IconButton onClick={toggleDrawer} className="openButton">
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
          </Stack>
        </Drawer>
      )}
    </div>
  );
};

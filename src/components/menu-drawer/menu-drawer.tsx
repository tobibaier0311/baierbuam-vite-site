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
          <IconButton onClick={toggleDrawer} className="closeButton">
            <CloseIcon />
          </IconButton>
          <Stack
            className="drawer"
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <NavItem isLarge text="Über uns" to="/" />
            <NavItem isLarge text="Termine" to="/gigs" />
            <NavItem isLarge text="Galerie" to="/images" />
            <NavItem isLarge text="Kontakt" to="/contact" />
          </Stack>
        </Drawer>
      )}
    </div>
  );
};

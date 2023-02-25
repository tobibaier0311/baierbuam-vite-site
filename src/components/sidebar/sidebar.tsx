import React from "react";
import { Divider, Stack } from "@mui/material";
import { Brand } from "../brand/Brand";
import "./sidebar.css";
import { NavItem } from "../nav-item/nav-item";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ImageIcon from "@mui/icons-material/Image";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { MenuDrawer } from "../menu-drawer/menu-drawer";

export function Sidebar() {
  return (
    <div className="sidebar">
    <MenuDrawer/>
     { /* <div>
        <Brand />
        <Divider/>
      </div>
      <div className="middle">
        <Stack alignItems="flex-start" spacing={3} className="sidebar__stack">
          <NavItem isLarge text="Über uns" to="/" icon={<InfoOutlinedIcon />} />
          <NavItem
            isLarge
            text="Termine"
            to="/gigs"
            icon={<CalendarMonthIcon />}
          />
          <NavItem
            isLarge
            text="Kontakt"
            to="/contact"
            icon={<AlternateEmailIcon />}
          />
          <NavItem isLarge text="Galerie" to="/images" icon={<ImageIcon />} />
        </Stack>
        <Divider/>
      </div>
      <Stack alignItems="flex-start" spacing={3} className="sidebar__stack">
        <NavItem text="Impressum" to="/imprint" />
        <NavItem disabled text="DSGVO" to="/dsgvo" />
      </Stack> */}
    </div>
  );
}

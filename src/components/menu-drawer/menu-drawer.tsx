import { Button, Drawer } from "@mui/material";
import { Brand } from "../brand/Brand";
import { NavItem } from "../nav-item/nav-item";

import { CalendarMonthOutlined } from "@mui/icons-material";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import AlternateEmail from "@mui/icons-material/AlternateEmail";
import Image from "@mui/icons-material/Image";
import { useState } from "react";
import "./Sidebar.css";

export type MenuDrawerProps = {
  open: boolean;
};

const drawerWidth = 240;

export const MenuDrawer = ({ open }: MenuDrawerProps) => {
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        open={open}
      >
        <Brand />
        <NavItem isLarge text="Über uns" to="/" icon={<InfoOutlined />} />
        <NavItem
          isLarge
          text="Termine"
          to="/gigs"
          icon={<CalendarMonthOutlined />}
        />
        <NavItem
          isLarge
          text="Kontakt"
          to="/contact"
          icon={<AlternateEmail />}
        />
        <NavItem isLarge text="Galerie" to="/images" icon={<Image />} />
      </Drawer>
    </>
  );
};

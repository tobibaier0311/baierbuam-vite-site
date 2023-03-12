import { IconButton, Stack } from "@mui/material";
import React from "react";
import Icons from "./Icons";
import SiteLinks from "./SiteLinks";

import { Brand } from "../brand/Brand";

import "./NavBar.css";
import { MenuDrawer } from "../menu-drawer/menu-drawer";

export default function NavBar() {
  return (
    <div className="NavBar">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ margin: "0 3rem" }}
      >
        <Brand />
        <div className="Links">
          <SiteLinks />
        </div>
        <Icons />
        <div className="Icon">
          <MenuDrawer />
        </div>
      </Stack>
    </div>
  );
}

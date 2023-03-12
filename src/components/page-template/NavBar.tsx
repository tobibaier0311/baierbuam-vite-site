import { Stack } from "@mui/material";
import React from "react";
import Icons from "./Icons";
import SiteLinks from "./SiteLinks";

import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ margin: "0 3rem" }}
      >
        <SiteLinks />
        <Icons />
      </Stack>
    </div>
  );
}

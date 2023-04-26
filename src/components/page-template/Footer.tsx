import React from "react";
import { Button, Divider, Stack } from "@mui/material";
import "./Footer.css";
import { NavItem } from "../nav-item/nav-item";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <NavItem to="/dsgvo" text="DSGVO/Impressum" />
        </Stack>
      </div>
    </>
  );
}

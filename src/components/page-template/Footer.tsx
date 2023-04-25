import React from "react";
import { Button, Divider, Stack } from "@mui/material";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <Button>DSGVO/Impressum</Button>
        </Stack>
      </div>
    </>
  );
}

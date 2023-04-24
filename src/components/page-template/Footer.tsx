import React from "react";
import { Button, Stack } from "@mui/material";

export default function Footer() {
  return (
    <div className="Footer">
      <Stack direction="row" alignItems="center" justifyContent="space-around">
        <Button>DSGVO/Impressum</Button>
      </Stack>
    </div>
  );
}

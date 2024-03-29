import React from "react";
import { Stack } from "@mui/material";

import "./Icons.css";

export default function Icons() {
  return (
    <div className="IconGroup">
      <Stack
        direction="row"
        spacing={4}
        style={{ fontFamily: "DM Sans" }}
      ></Stack>
    </div>
  );
}

import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton, Stack, Tooltip } from "@mui/material";

export default function Icons() {
  return (
    <Stack direction="row" spacing={4} style={{ fontFamily: "DM Sans" }}>
      <Tooltip title="Instagram">
        <IconButton href="https://www.instagram.com/baierbuamandfriends">
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Facebook">
        <IconButton href="https://www.facebook.com/baierbuamandfriends">
          <FacebookIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Youtube">
        <IconButton>
          <YouTubeIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

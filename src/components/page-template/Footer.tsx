import React from "react";
import {
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import "./Footer.css";
import { NavItem } from "../nav-item/nav-item";
import { Brand } from "../brand/Brand";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <Container>
          <div className="footer">
            <div className="left">
              <Brand />
              <Stack gap="0.5rem" direction="row" sx={{ padding: "1rem 0" }}>
                <Tooltip title="Instagram">
                  <IconButton href="https://www.instagram.com/baierbuamandfriends">
                    <InstagramIcon className="IconButton" fontSize="medium" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Facebook">
                  <IconButton href="https://www.facebook.com/baierbuamandfriends">
                    <FacebookIcon className="IconButton" fontSize="medium" />
                  </IconButton>
                </Tooltip>
              </Stack>
            </div>

            <NavItem footer to="/dsgvo" text="Datenschutz/Impressum" />
          </div>
        </Container>
      </div>
    </>
  );
}

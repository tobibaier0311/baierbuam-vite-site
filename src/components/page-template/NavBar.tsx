import { Box, Button, Container, Divider, Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import SiteLinks from "./SiteLinks";
import MenuIcon from '@mui/icons-material/Menu';

import Logo from "../../assets/Logo.png";

import { Brand } from "../brand/Brand";

import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { NavItem } from "../nav-item/nav-item";

export default function NavBar() {
  const [open, setOpen] = useState(false)
  
  const to = useNavigate(); 

  return ( 
    <Container>
      <div className="NavBar">
        <a onClick={() => to("/")} className="brand">
          <Brand />
          <h1 style={{ textDecoration: "none" }}>Baierbuam And Friends</h1>
        </a>
        <img src={Logo} width="80px" className="Logo" />
        <div className="Links">
          <SiteLinks />
        </div>
        <div className="icon">
          <IconButton  onClick={() => setOpen(true)} sx={{ color: "#121212"}}>
          <MenuIcon fontSize="large"/> 
        </IconButton>
        </div>
        
        <Drawer open={open} anchor="right" variant="temporary" onClose={() => setOpen(false)}>
          <Box sx={{ width: 150, padding: "0 2rem", display: "flex",flexDirection: "column", alignItems:"start"}}>
              LOGO?
              <Divider sx={{ alignSelf: "stretch"}}/>
              <div onClick={() => setOpen(false)}>
              <NavItem to="/" text="Home"/>
              <NavItem to="/gigs" text="Termine"/>
              <NavItem to="/images" text="Galerie" />
              <NavItem to="/contact" text="Kontakt"/></div>
              <Divider sx={{ alignSelf: "stretch"}}/>
          </Box>
        </Drawer>
      </div>
    </Container>
  );
}

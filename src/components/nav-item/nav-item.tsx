import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./nav-item.css";

export type NavItemProps = {
  isLarge?: boolean;
  to: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  text: string;
};

export function NavItem({ isLarge, to, disabled, icon, text }: NavItemProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <Button
      disabled={disabled}
      sx={location.pathname === to ? { color: "black" } : { color: "grey" }}
      startIcon={icon}
      onClick={handleClick}
    >
      <div
        className={
          location.pathname === to ? "buttonTextClicked" : "buttonText"
        }
      >
        <Typography variant={isLarge ? "h6" : "body1"}>{text}</Typography>
      </div>
    </Button>
  );
}

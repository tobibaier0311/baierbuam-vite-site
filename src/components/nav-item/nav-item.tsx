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
  handleClose?: () => void;
};

export function NavItem({
  isLarge,
  to,
  disabled,
  icon,
  text,
  handleClose,
}: NavItemProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
    if (handleClose) handleClose();
  };

  return (
    <Button
      disabled={disabled}
      sx={location.pathname === to ? { color: "black" } : { color: "grey" }}
      startIcon={icon}
      onClick={handleClick}
      className="Button"
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

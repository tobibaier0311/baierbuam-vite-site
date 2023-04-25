import { Button } from "@mui/material";
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
      sx={{ "&:hover": { backgroundColor: "transparent" } }}
      startIcon={icon}
      onClick={handleClick}
      className="Button"
      variant="text"
      disableRipple
      disableFocusRipple
    >
      <div
        className={
          location.pathname === to ? "buttonTextClicked" : "buttonText"
        }
      >
        <h3>{text}</h3>
      </div>
    </Button>
  );
}

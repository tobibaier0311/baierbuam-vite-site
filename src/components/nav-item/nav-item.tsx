import { Button, Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./nav-item.css";

export type NavItemProps = {
  isLarge?: boolean;
  to: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  text: string;
  handleClose?: () => void;
  footer?: boolean;
};

export function NavItem({
  to,
  disabled,
  icon,
  text,
  handleClose,
  footer,
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
        <Typography
          sx={
            footer
              ? ({ color: "#757575" } as CSSProperties)
              : ({ color: "#042556" } as CSSProperties)
          }
        >
          {text}
        </Typography>
      </div>
    </Button>
  );
}

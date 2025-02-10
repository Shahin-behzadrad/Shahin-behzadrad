"use client";

import clsx from "clsx";
import classes from "./Button.module.scss";
import { ReactNode } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary";
  disabled?: boolean;
  fullwidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Button = ({
  children,
  onClick,
  className,
  variant = "contained",
  disabled = false,
  fullwidth,
  color = "primary",
  endIcon,
  startIcon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        classes.button,
        {
          [classes.fullwidth]: fullwidth,
          [classes.text]: variant === "text",
          [classes.outlined]: variant === "outlined",
          [classes.contained]: variant === "contained",
          [classes.primary]: color === "primary",
          [classes.secondary]: color === "secondary",
          [classes.disabled]: disabled,
          [classes.hasStartIcon]: startIcon,
          [classes.hasEndIcon]: endIcon,
        },
        className
      )}
      disabled={disabled}
    >
      {startIcon && <div className={classes.startIcon}>{startIcon}</div>}
      {children}
      {endIcon && <div className={classes.endIcon}>{endIcon}</div>}
    </button>
  );
};

export default Button;

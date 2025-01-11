import { ReactNode } from "react";
import classes from "./Button.module.scss";
import clsx from "clsx";

type Props = {
  children?: ReactNode;
  onClick?: () => void;
  variant?: "outlined" | "contained" | "text";
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  className?: string;
};

const Button = ({
  className,
  children,
  onClick,
  variant = "contained",
  size = "md",
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={clsx(classes.button, className, {
        [classes.contained]: variant === "contained",
        [classes.outlined]: variant === "outlined",
        [classes.text]: variant === "text",
        [classes.sm]: size === "sm",
        [classes.lg]: size === "lg",
        [classes.xl]: size === "xl",
        [classes.xxl]: size === "xxl",
      })}
    >
      {children}
    </button>
  );
};

export default Button;

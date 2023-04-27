import React from "react";
import cn from "classnames";
import { Loader } from "../Loader";

export const Button = ({
  children,
  isLoading,
  className,
  onClick,
  isDisabled,
}) => (
  <button className={cn("", className)} onClick={onClick} disabled={isDisabled}>
    {isLoading ? <Loader /> : children}
  </button>
);

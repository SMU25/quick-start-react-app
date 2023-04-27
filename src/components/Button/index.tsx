import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { Loader } from "../Loader";

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  className?: string;
  onClick?: VoidFunction;
  isDisabled?: boolean;
}

export const Button: FC<Props> = ({
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

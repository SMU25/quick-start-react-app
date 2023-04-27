import React, { FC } from "react";
import cn from "classnames";

interface Props {
  className?: string;
}

export const Loader: FC<Props> = ({ className }) => (
  <div className={cn("", className)} />
);

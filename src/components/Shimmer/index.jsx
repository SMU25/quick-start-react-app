import React from "react";
import cn from "classnames";
import "./style.css";

export const Shimmer = ({ className }) => (
  <div className={cn("shimmer", className)} />
);

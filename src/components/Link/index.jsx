import React from "react";
import { Link as LinkComponent } from "react-router-dom";
import { scrollTop } from "utils/scrollTop";

export const Link = ({ children, href, className }) => (
  <LinkComponent className={className} to={href} onClick={scrollTop}>
    {children}
  </LinkComponent>
);

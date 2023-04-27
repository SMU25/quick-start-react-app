import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { TYPE_STRING } from "constants/types";

const T_PREFIX = "error";

export const Error = ({ children, className, showError }) => {
  const { t } = useTranslation();

  if (!showError) return null;

  const errorText =
    typeof children === TYPE_STRING
      ? t(`${T_PREFIX} - ${children}`)
      : t(`${T_PREFIX} - ${children.i18nKey}`, children.i18nParams);

  return <div className={cn("", className)}>{errorText}</div>;
};

import React, { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { TYPE_STRING } from "src/constants/types";

const T_PREFIX = "error";

interface Props {
  children: any;
  className?: string;
  showError: boolean;
}

export const Error: FC<Props> = ({ children, className, showError }) => {
  const { t } = useTranslation();

  if (!showError) return null;

  const errorText =
    typeof children === TYPE_STRING
      ? t(`${T_PREFIX} - ${children}`)
      : t(`${T_PREFIX} - ${children.i18nKey}`, children.i18nParams);

  return <div className={cn("", className)}>{String(errorText)}</div>;
};

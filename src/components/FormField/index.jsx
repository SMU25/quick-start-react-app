import React from "react";
import cn from "classnames";
import { Trans } from "react-i18next";
import { Error } from "../Error";

const T_PREFIX = "form-field";

export const FormField = ({
  children,
  className,
  labelClassName,
  label,
  labelFor,
  showError,
  error,
}) => {
  return (
    <div className={cn("", className)}>
      {Boolean(label) && (
        <label htmlFor={labelFor} className={cn("", labelClassName)}>
          <Trans>{`${T_PREFIX} - ${label}`}</Trans>
        </label>
      )}
      {children}
      <Error showError={showError}>{error}</Error>
    </div>
  );
};

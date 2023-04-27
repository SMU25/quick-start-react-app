import React, { FC } from "react";
import cn from "classnames";
import { useField } from "formik";
import { IFormField } from "src/types/form";
import { FormField } from ".";

interface Props extends IFormField {
  containerClassName?: string;
}

export const Input: FC<Props> = ({
  id,
  label,
  className,
  containerClassName,
  labelClassName,
  ...props
}) => {
  const fieldId = id || props.name;

  const [{ value, ...field }, { error, touched }] = useField(fieldId);
  const showError = Boolean((touched || value) && error);

  return (
    <FormField
      className={containerClassName}
      labelClassName={labelClassName}
      label={label}
      labelFor={fieldId}
      showError={showError}
      error={error}
    >
      <input
        className={cn(className, { "": showError })}
        id={fieldId}
        {...props}
        {...field}
      />
    </FormField>
  );
};

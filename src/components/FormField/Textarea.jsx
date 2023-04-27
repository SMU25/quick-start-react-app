import React from "react";
import cn from "classnames";
import { useField } from "formik";
import { FormField } from ".";

export const Textarea = ({
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
      <textarea
        id={fieldId}
        className={cn("", className, { "": showError })}
        {...props}
        {...field}
      />
    </FormField>
  );
};

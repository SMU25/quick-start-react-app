import React, { FC } from "react";
import cn from "classnames";
import { useField } from "formik";
import { IFormField } from "src/types/form";
import { FormField } from ".";

interface Props extends Omit<IFormField, "type"> {
  containerClassName?: string;
  showError?: boolean;
  error?: string;
}

export const Textarea: FC<Props> = ({
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

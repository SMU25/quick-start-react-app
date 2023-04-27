import React from "react";

export const RenderFormField = ({ fields = [], ...props }) => (
  <>
    {fields.map(({ component, ...field }) => {
      const Field = component;

      return <Field key={field.name} {...field} {...props} />;
    })}
  </>
);

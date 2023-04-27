import { FC } from "react";

export interface IOptionSelect {
  value: string;
  label?: string;
}

export interface IFormField {
  id?: string;
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  options?: IOptionSelect[];
}

export interface IRenderFormField extends IFormField {
  component: FC<IFormField>;
}

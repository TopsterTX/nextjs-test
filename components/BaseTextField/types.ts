import { UseFormReturn } from "react-hook-form";

export interface IBaseTextFieldProps {
  errorText?: string;
  control: UseFormReturn["control"];
  name: string;
  label: string;
  disabled?: boolean;
  multiline?: boolean;
  maxRows?: number;
  rows?: number;
}

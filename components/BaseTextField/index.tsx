import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

import { IBaseTextFieldProps } from "./types";
import styles from "../../styles/base-text-field.module.scss";

export const BaseTextField: React.FC<IBaseTextFieldProps> = ({
  control,
  name,
  errorText,
  disabled,
  label,
  multiline,
  maxRows,
  rows,
}) => {
  return (
    <div className={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextField
            multiline
            maxRows={maxRows}
            rows={rows}
            error={Boolean(errorText)}
            label={label}
            helperText={errorText}
            variant="outlined"
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={styles.controller}
          />
        )}
      />
    </div>
  );
};

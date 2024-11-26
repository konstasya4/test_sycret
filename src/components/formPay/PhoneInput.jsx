import React from "react";
import { TextField } from "@mui/material";
import InputMask from "react-input-mask";
import "./FormStyle.css";

export default function PhoneInput({
  label,
  value,
  onChange,
  error,
  helperText,
}) {
  return (
    <InputMask
      mask="+7 (999) 999-99-99"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      maskChar="_"
    >
      {() => (
        <TextField
          label={label}
          value={value}
          error={error}
          helperText={helperText}
          fullWidth
          required
          margin="normal"
          variant="outlined"
        />
      )}
    </InputMask>
  );
}

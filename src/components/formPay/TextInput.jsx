import "./FormStyle.css";
import React from "react";
import { TextField } from "@mui/material";

export default function TextInput({
  label,
  value,
  onChange,
  error,
  helperText,
  multiline = false,
  rows = 1,
}) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      error={error}
      helperText={helperText}
      fullWidth
      required
      multiline={multiline}
      rows={rows}
      margin="normal"
      variant="outlined"
    />
  );
}

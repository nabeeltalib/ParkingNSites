import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({
  value,
  onChange,
  label,
  type,
  className,
}) {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        value={value}
        onChange={onChange}
        className={className}
        label={label}
        type={type}
      />
    </Box>
  );
}

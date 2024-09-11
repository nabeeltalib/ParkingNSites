import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function BasicTextFields({
  value,
  onChange,
  label,
  type,
  className,
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleMouseUpPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      component="form"
      sx={{
        marginBottom: 2,
        width: "100%",
        maxWidth: "100%",
      }}
      className="w-full"
      noValidate
      autoComplete="off"
    >
      {type === "password" ? (
        <FormControl
          sx={{ width: "100%", maxWidth: "100%" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
            value={value}
            onChange={onChange}
            fullWidth
          />
        </FormControl>
      ) : (
        <TextField
          fullWidth
          id="outlined-basic"
          value={value}
          onChange={onChange}
          className={className}
          label={label}
          type={type}
        />
      )}
    </Box>
  );
}

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons({ variant, label, className, onClick }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant={variant} className={className} onClick={onClick}>
        {label}
      </Button>
    </Stack>
  );
}

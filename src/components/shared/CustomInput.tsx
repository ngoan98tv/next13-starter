import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

function CustomInput(props: TextFieldProps) {
  return <TextField {...props} />;
}

export default CustomInput;

import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function TextInput({ name, control, margin, label, type }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (<TextField 
            label={label} 
            type={type}
            fullWidth 
            margin={margin} 
            error={!!error}
            helperText={error ? error.message : null}
            variant="outlined"
            onChange={onChange}
            value={value}
        />);
      }}
    />
  );
}

export default TextInput;

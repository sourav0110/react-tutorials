import React from "react";
import { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, FormLabel, Select, Slider } from "@mui/material";

function FormInputSlider({
  label,
  name,
  control,
  setvalue,
  min = 0,
  max = 100,
  step = 1,
}) {
  const [sliderValue, setSliderValue] = useState(10);

  useEffect(() => {
    setvalue(name, sliderValue);
  }, [name, setvalue, sliderValue]);

  const handleChange = (e, newValue) => {
    console.log(newValue);
    setSliderValue(newValue);
  };

  return (
    <FormControl fullWidth margin="normal" size={"small"}>
        <FormLabel component={"legend"}>{label}</FormLabel>
        <Controller
            name={name}
            control={control}
            render={
                ({field, fieldState:{error}})=>{
                    return(
                        <>
                        <Slider
                            onChange={handleChange}
                            value={sliderValue}
                            valueLabelDisplay="auto"
                            error={!!error}
                            min={min}
                            max={max}
                            step={step}                       
                        
                        />
                        {error && <FormHelperText sx={{color:"red"}} >{error.message}</FormHelperText>}
                        </>
                    )

                }
            }
        
        />
    </FormControl>
  ); 
}

export default FormInputSlider;

import React from 'react'
import {Controller} from "react-hook-form"
import { FormHelperText, FormControl, RadioGroup, Radio, FormControlLabel, FormLabel } from '@mui/material'

function RadioInput({label, control, options, name}) {
  return (
    <div>
        <FormControl margin='normal' fullWidth size={'small'} >
            <FormLabel component={"legend"}>{label}</FormLabel>
            <Controller
                name={name}
                control={control} 
                render={
                    ({field:{onChange, value}, fieldState:{error}})=>{
                        return(
                            <>
                            <RadioGroup  error={!!error} value={value} onChange={onChange} row>
                                {options.map((option)=>{
                                    return (
                                        <FormControlLabel
                                            key={option.label}
                                            label={option.label}
                                            value={option.label}
                                            control={<Radio/>}                                        
                                        />
                                    )
                                })}
                            </RadioGroup>                                                    
                            {error && <FormHelperText sx={{color:"red"}} >{error.message}</FormHelperText>}

                            </>
                        )

                    }
                }           
            
            />

        </FormControl>
      
    </div>
  )
}

export default RadioInput

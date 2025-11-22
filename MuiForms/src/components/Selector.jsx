import React from 'react'
import { FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Controller } from 'react-hook-form'

function Selector({label, name, control, options}) {
  return (
    <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Controller
            name={name}
            control = {control} 
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                    return (<>  
                       
                        <Select onChange={onChange} value={value} >
                        {
                            options.map((option)=>{
                                return(
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                );
                            })
                        }
                         
                    </Select>
                    {error && <FormHelperText sx={{color:"red"}}>{error.message}</FormHelperText>}
                    </>);   
                }}     

        
        />
      
    </FormControl>
  )
}

export default Selector

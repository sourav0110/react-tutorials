import React from 'react'
import { useState, useEffect } from 'react'
import { Checkbox, FormControl, FormLabel, FormControlLabel, FormHelperText } from '@mui/material'
import { Controller } from 'react-hook-form'
import { is } from 'zod/v4/locales'


function MultiCheckBox({name, control, setValue, label, options}) {
    const [selectedItems, setSelectedItems] = useState([])
    const handleSelect = (value) => {
        const isPresent = selectedItems.indexOf(value);
        if(isPresent == -1){
            setSelectedItems((prev) => [...prev, value]);
        }
        else{
            const remaining = selectedItems.filter((item) => item!==value)
            setSelectedItems(remaining)
        }
    }
    const [errorMessage, setErrorMessage] = useState(null)
    useEffect(() => {
        setValue(name, selectedItems)
    }, [name, selectedItems, setValue])


  return (
    <FormControl size={"small"} fullWidth variant={"outlined"}>
        <FormLabel component={"legend"}>{label}</FormLabel>
        <div>
            {
                options.map((option)=>{
                    return(
                        <FormControlLabel
                            control={
                                <Controller
                                    name={name}
                                    control={control}
                                    render={({field, fieldState:{error}})=>{
                                        {error ? setErrorMessage(error.message) : setErrorMessage(null)}
                                        return(
                                            <Checkbox
                                                checked={selectedItems.includes(option.value)}
                                                onChange={() => handleSelect(option.value)}
                                                error={!!error}
                                                
                                                
                                                />
                                            
                                        );
                                        }
                                    }                                                                                         
                                />
                            }
                            label={option.label}   
                            key={option.value}                  
                        />
                    );
                })
            }
        </div>
        {errorMessage && <FormHelperText sx={{color:"red"}}>{errorMessage}</FormHelperText>}
    </FormControl>
  )
}

export default MultiCheckBox

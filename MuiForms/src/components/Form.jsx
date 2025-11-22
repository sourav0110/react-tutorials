import React from 'react'
import { Container, Paper, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import {TextInput} from './index'
import { userSchema } from '../schema/validator'
import Selector from './Selector'
import { Button } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router'

function Form() {

    const formHandler = (data)=>{
        const received = JSON.stringify(data,null,2)
        console.log(received)
        navigate("/display", {state: received})

    }

    const defaultValues={
        email: "",
        password: "",
        phoneNumber: "",
        country: "",
        address:""
    }

    const {handleSubmit, reset, control, setValue} = useForm({
        resolver: zodResolver(userSchema),
        defaultValues: defaultValues
    })

    const options=[
        {
            value:"Ind",
            label:"India"
        },
         {
            value:"US",
            label:"USA"
        }
    ]

    const navigate = useNavigate()

  return (
    <div>
      <Container component="main" maxWidth="md" sx={{ mt: 8}}>
         <Paper elevation={3} sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>

            <TextInput name="email"  control={control} margin="normal" type="text"  label="email"/>
            <TextInput name="password"  control={control} margin="normal" type="password"  label="password"/>
            <TextInput name="phoneNumber"  control={control} margin="normal" type="text"  label="phone number"/>
            <Selector name="country" control={control} options={options} label={"countries"}/>
            <Button variant='contained' onClick={handleSubmit(formHandler)} sx={{mt:4, alignSelf:"end"}} >submit</Button>

         </Paper>
      </Container>
    </div>
  )
}

export default Form

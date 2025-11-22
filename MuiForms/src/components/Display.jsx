import React from 'react'
import { useLocation } from 'react-router'
import { Container, Paper } from '@mui/material'

function Display() {
    const location = useLocation()
  return (
    <div>
        <Container component="main" maxWidth="md" sx={{ mt: 8}}>
         <Paper elevation={3} sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {location.state}
         </Paper>
         </Container>

    </div>
  )
}

export default Display

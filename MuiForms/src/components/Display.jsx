import React from 'react'
import { useLocation } from 'react-router'
import { Container, Paper } from '@mui/material'

function Display() {
    const location = useLocation()
  return (
    <div>
        <Container component="main" maxWidth="md" sx={{ mt: 8}}>
         <Paper elevation={3} sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow:"10px", borderRadius: '20px'}}>
          <pre style={{ minWidth:"90%",fontSize:"120%", background: '#f4f4f4' ,overflow: 'hidden', borderRadius: '10px', padding: '10px'}}>
          {JSON.stringify(location.state, null, 2)}
          </pre>
            
         </Paper>
         </Container>

    </div>
  )
}

export default Display

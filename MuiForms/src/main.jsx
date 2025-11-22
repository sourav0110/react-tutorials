import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './components/Form.jsx'

import { Route,  createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router'
import Display from './components/Display.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="" element={<Form/>} />
      <Route path="/display" element={<Display/>} />      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

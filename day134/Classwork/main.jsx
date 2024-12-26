import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FoodApp from './FoodApp.jsx'
import {BrowserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter> 
        <FoodApp />
    </BrowserRouter>
  </StrictMode>,
)
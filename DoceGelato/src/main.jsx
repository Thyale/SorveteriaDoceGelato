import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AppRoutes from "./routes";
import Header from './Components/Header'; 
import Footer from './Components/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
      <AppRoutes />
    <Footer/>
  </StrictMode>,
)

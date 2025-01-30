import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from "./routes";

import Header from './Pages/Header/Header'; import './Pages/Header/Header.css'
import Footer from './Pages/Footer/Footer'; import './Pages/Footer/Footer.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
      <AppRoutes />
    <Footer/>
  </StrictMode>,
)

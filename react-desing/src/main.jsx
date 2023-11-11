import React from 'react'
import ReactDOM from 'react-dom/client'
import { Products } from './App.jsx'
import { FooterWithLogo } from './Footer.jsx'
import { NavbarSimple } from './Navbar.jsx'

import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <NavbarSimple/>
      <Products/>
      <FooterWithLogo />
  </ThemeProvider>

  </React.StrictMode>,
)

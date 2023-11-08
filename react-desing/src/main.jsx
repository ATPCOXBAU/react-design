import React from 'react'
import ReactDOM from 'react-dom/client'
import { FooterWithLogo, Products } from './App.jsx'

import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Products/>
      <FooterWithLogo />
  </ThemeProvider>

  </React.StrictMode>,
)

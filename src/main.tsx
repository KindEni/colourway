import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.scss'
import './index.css'
import { ThemeProvider } from './theme-context'
import { RGBContextProvider } from './context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RGBContextProvider>
      <App />
      </RGBContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

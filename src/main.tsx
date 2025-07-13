import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./zero.css"
import './index.css'
import 'antd/dist/reset.css';
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </StrictMode>,
)

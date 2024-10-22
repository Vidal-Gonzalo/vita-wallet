import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes/index.tsx'
import './index.css'
import { UserProvider } from './context/UserContext.tsx'
import { ExchangeProvider } from './context/ExchangeContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <UserProvider>
        <ExchangeProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ExchangeProvider>
      </UserProvider>
    </AuthProvider>
  </StrictMode>,
)

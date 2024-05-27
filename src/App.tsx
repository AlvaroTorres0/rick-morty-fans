import './App.css'
import React from 'react'
import RountingHandler from './RoutingHandler'
import { AuthContextProvider } from './context/AuthContext'
import { Toaster } from 'sonner'

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <RountingHandler></RountingHandler>
      <Toaster />
    </AuthContextProvider>
  )
}

export default App

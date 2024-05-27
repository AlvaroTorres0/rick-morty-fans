import './App.css'
import React from 'react'
import RountingHandler from './RoutingHandler'
import { AuthContextProvider } from './context/AuthContext'

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <RountingHandler></RountingHandler>
    </AuthContextProvider>
  )
}

export default App

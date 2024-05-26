import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Auth } from './Pages/Auth/Auth'

const RountingHandler: React.FC = () => {
  return (
        <Routes>
            <Route path='/' element={<Auth />}/>
            <Route path='/login' element={<Auth />}/>
        </Routes>
  )
}

export default RountingHandler

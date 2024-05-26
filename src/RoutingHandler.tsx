import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Auth } from './Pages/Auth/Auth'

const RountingHandler: React.FC = () => {
  return (
        <Routes>
            <Route path='/' element={<Auth formType='login' />}/>
            <Route path='/login' element={<Auth formType='login' />}/>
            <Route path='/signup' element={<Auth formType='signup' />}/>
        </Routes>
  )
}

export default RountingHandler

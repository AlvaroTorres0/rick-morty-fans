import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Auth } from './Pages/Auth/Auth'
import LayoutHome from './Pages/Home/Layout'
import Inicio from './Pages/Home/Inicio'
import Ubicaciones from './Pages/Home/Ubicaciones'

const RountingHandler: React.FC = () => {
  return (
        <Routes>
            <Route path='/iniciar-sesion' element={<Auth formType='login' />}/>
            <Route path='/registro' element={<Auth formType='signup' />}/>
            <Route path="/" element={<LayoutHome />}>
              <Route index element={<Inicio />} />
              <Route path="ubicaciones" element={<Ubicaciones />} />
              <Route path="favoritos" />
            </Route>
        </Routes>
  )
}

export default RountingHandler

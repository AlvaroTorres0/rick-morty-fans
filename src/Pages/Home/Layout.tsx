import React from 'react'
import NavBar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

const LayoutHome: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar />
      <main className='flex flex-col flex-1 justify-center items-center overflow-auto'>
        <Outlet />
      </main>
    </div>
  )
}

export default LayoutHome

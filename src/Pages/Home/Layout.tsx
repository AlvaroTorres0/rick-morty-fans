import React from 'react'
import NavBar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

const LayoutHome: React.FC = () => {
  return (
        <div className='h-screen flex justify-center'>
            <NavBar></NavBar>
            <main className='flex justify-center items-center'>
                <Outlet />
            </main>
        </div>
  )
}

export default LayoutHome

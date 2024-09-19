import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

function MainLayout() {
  return (
    <div className='flex flex-col'>
        <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout

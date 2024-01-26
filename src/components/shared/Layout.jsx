import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className='bg-sky-200'>SideBar</div>
    <div className='bg-teal-200'>Header</div>
    <div>{<Outlet/>}</div>
  </>
  )
}

export default Layout
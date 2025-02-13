import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <nav>
            <Link to='/contacts'>Contact</Link>
        </nav>
        <div>
        <Outlet/>
        </div>
    </div>
  )
}

export default Layout
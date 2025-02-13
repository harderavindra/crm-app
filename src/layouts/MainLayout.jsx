import React from 'react'
import SideNav from '../components/layout/SideNav'
import { Outlet } from 'react-router-dom'
import Logo from '../components/common/Logo'

const MainLayout = () => {
    return (
        <div className="flex flex-row min-h-screen bg-brand-surface">
            <div className='bg-white border-r border-gray-300 p-3 flex flex-col items-center'>
                <div className='mb-4'><Logo size={48}/></div>
                <SideNav />
            </div>
            <div className="content p-4">
                <Outlet /> {/* Nested routes will be rendered here */}
            </div>
        </div>
    )
}

export default MainLayout
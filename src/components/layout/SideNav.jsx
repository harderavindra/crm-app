import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavigationLink from './NavigationLink'
import icon1 from '../../assets/icon-dashboard.svg'
import icon2 from '../../assets/icon-idcard.svg'
const SideNav = () => {
    return (
            <nav>
                <ul className='flex flex-col gap-2'>
                    <li>
                        <NavigationLink icon={icon1} to="/dashboard"/> 
                    </li>
                    <li><NavigationLink icon={icon2} to="/projects"/></li>
                    <li><NavigationLink icon={icon2} to="/contacts"/></li>
                   
                </ul>
            </nav>
    )
}

export default SideNav
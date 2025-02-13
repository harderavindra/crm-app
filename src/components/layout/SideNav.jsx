import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavigationLink from './NavigationLink'
import iconDahboard from '../../assets/icon-dashboard.svg'
import iconID from '../../assets/icon-idcard.svg'
import iconBrief from '../../assets/icon-briefcase.svg'
import iconCalendar from '../../assets/icon-calendar.svg'
import iconTeam from '../../assets/icon-team.svg'
import icon2 from '../../assets/icon-idcard.svg'

const SideNav = () => {
    return (
            <nav>
                <ul className='flex flex-col gap-2'>
                    <li>
                        <NavigationLink icon={iconDahboard} to="/dashboard"/> 
                    </li>
                    <li><NavigationLink icon={iconBrief} to="/projects"/></li>
                    <li><NavigationLink icon={iconID} to="/contacts"/></li>
                    <li><NavigationLink icon={iconCalendar} to="/aiagent"/></li>
                    <li><NavigationLink icon={iconTeam} to="/leads"/></li>
                    <li><NavigationLink icon={icon2} to="/contacts"/></li>
                   
                </ul>
            </nav>
    )
}

export default SideNav
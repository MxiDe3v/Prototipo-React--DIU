import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/favoritos'
      >
        Favoritos
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/informacion'
      >
        Información
      </NavLink>
    </nav>
  )
}

export default NavBar

import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoApp from '../assets/Illustration.png'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      
      <a href='/'>
          <img src={LogoApp} height={100} alt='logo app' /><br />
      </a>

      <div style={{display: 'flex', justifyContent: 'center'}}>
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
      </div>
    </nav>
  )
}

export default NavBar

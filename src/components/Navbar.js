import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <NavLink to={'/'} className='digix'>Digix</NavLink>
      </div>
      <div className="links">
        <NavLink to={'/'} className='navlinks' >Home</NavLink>
        <NavLink to={'/about'} className='navlinks'>About</NavLink>
        <NavLink to={'/courses'} className='navlinks'>Courses</NavLink>
        <NavLink to={'/fee'} className='navlinks'>Fee</NavLink>
        <NavLink to={'/contact'} className='navlinks'>Contact</NavLink>
      </div>
      <div className="addmission">
        <NavLink to={'/admissionform'} className='navbtn' >Enroll Now</NavLink>
      </div>
    </div>
  )
}

export default Navbar

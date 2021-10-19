import React from 'react'
import './mobile.css'

function MobileMenu({isOpen, setIsOpen}) {
  return <div className='mobile-menu'>
    <div className='mobile-menu-items' onClick={()=>setIsOpen(!isOpen)}>
      <div className='close-icon'>
        <i class="fi fi-rr-cross " ></i>
      </div>
      
      <a href="#projects" className='mobile-menu-item'>
        <i class="fi fi-rr-edit-alt menu-item-icon"></i>
        Projects
      </a>
      <a href="#skills" className='mobile-menu-item'>
      <i class="fi fi-rr-playing-cards menu-item-icon"></i>
        Skills
      </a>
      <a href="#achievements" className='mobile-menu-item'>
        <i class="fi fi-rr-badge menu-item-icon"></i>
        Awards
      </a>
      <a href="#experiences" className='mobile-menu-item'>
        <i class="fi fi-rr-hourglass-end menu-item-icon"></i>
        Work
      </a>
      <a href="#contact" className='mobile-menu-item'>
        <i class="fi fi-rr-phone-call menu-item-icon"></i>
        Contact
      </a>
    </div>
  </div>
}

export default MobileMenu

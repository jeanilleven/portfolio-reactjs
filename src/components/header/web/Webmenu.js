import React from 'react'
import './web.css'

function WebMenu() {
  return <div className='web-menu'>
    <div className='web-menu-items'>
      <a href="#about" className='web-menu-item'>
       <i class="fi fi-rr-home menu-item-icon"></i>
        Home
      </a>
      <a href="#projects" className='web-menu-item'>
        <i class="fi fi-rr-edit-alt menu-item-icon"></i>
        Projects
      </a>
      <a href="#skills" className='web-menu-item'>
      <i class="fi fi-rr-playing-cards menu-item-icon"></i>
        Skills
      </a>
      <a href="#experiences" className='web-menu-item'>
        <i class="fi fi-rr-hourglass-end menu-item-icon"></i>
        Work
      </a>
      <a href="#awards" className='web-menu-item'>
        <i class="fi fi-rr-badge menu-item-icon"></i>
        Awards
      </a>
      <a href="#testimonials" className='web-menu-item'>
        <i class="fi fi-rr-following menu-item-icon"></i>
        Testimonials
      </a>
      <a href="#contact" className='web-menu-item'>
        <i class="fi fi-rr-phone-call menu-item-icon"></i>
        Contact
      </a>
    </div>
  </div>
}

export default WebMenu

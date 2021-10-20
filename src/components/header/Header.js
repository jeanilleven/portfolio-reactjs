import React, { useState } from 'react'
import './header.css'
import WebMenu from './web/Webmenu'
import MobileMenu from './mobile/Mobilemenu'
import Logo from '../../img/favicon.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
      <div className='header-container'>
        <div className='header'>
          <div className='logo'>
            <img src={Logo} alt='Jeanille Ven'/>
          </div>
          <div className='menu'>
            <div className='web-menu'>
              <WebMenu />
            </div>

            <div className='mobile-menu'>
              <div onClick = {()=> setIsOpen(!isOpen)}>
                <i class="fi fi-rr-apps-add menu-icon"></i>
              </div>
              {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header

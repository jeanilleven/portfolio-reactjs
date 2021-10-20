import React from 'react'
import './about.css'

import SocialMedia from '../social-media/SocialMedia'
import ImgAbout from '../../../img/gif-about-pic.png'
import AboutDescription from './AboutDescription'

function About() {
  return <div id='about' className='about'>
    <div className='about-top'>
      <div className='about-info'>
        Hello, world! 👋🏼 I am <AboutDescription />
      </div>
      <div className='about-photo'>
        <img src={ImgAbout} alt='AboutPicture' className='about-info-pic'/>
      </div>
    </div>
    <SocialMedia />
  </div>
}

export default About

import React from 'react'
import './about.css'

import SocialMedia from '../social-media/SocialMedia'
// import ImgAbout from '../../../img/gif-about-pic.gif'
import ImgAbout from '../../../img/gif-about-pic.png'

function About() {
  return <div id='about' className='about'>
    <div className='about-top'>
      <div className='about-info'>
        Hello, world! 👋🏼 I am <span className='about-info-name'>Jean</span>. 
        I am an aspiring software developer, and
        I am a great teamplayer!
      </div>
      <div className='about-photo'>
        <img src={ImgAbout} alt='AboutPicture' className='about-info-pic'/>
      </div>
    </div>
    <SocialMedia />
  </div>
}

export default About

import React from 'react'
import './about.css'

import SocialMedia from '../social-media/SocialMedia'
import ImgAbout from '../../../img/about-pic.png'
import AboutDescription from './AboutDescription'

function About() {
  return <div id='about' className='about'>
    <div className='about-top'>
      <div className='about-info'>
        Hello, world!
        <br />My name is <span className='about-name'>Jean</span>. And proudly I am
        <div className='about-description'>
          <span><AboutDescription /></span>
        </div>
        <br />
      </div>
      <div className='about-photo'>
        <img src={ImgAbout} alt='AboutPicture' className='about-info-pic'/>
      </div>
    </div>
    <SocialMedia />
  </div>
}

export default About

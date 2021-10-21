import React from 'react'
import './contact.css'
import Separator from '../../../common/separator/Separator'
import SocialMedia from '../social-media/SocialMedia'

function Contact() {
  return <div className='contact'>
    <Separator />
    <label className='section-title'>Contact</label>
    <div className='contact-details'>
      <p>Get to know me more through these platforms!</p>
      <SocialMedia />
    </div>
    
  </div>
}

export default Contact

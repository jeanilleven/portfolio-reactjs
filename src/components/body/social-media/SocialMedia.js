import React from 'react'
import './social-media.css'
import { SocialMediaData } from '../../data/social'

function SocialMedia() {
  const data = SocialMediaData;
  return <div className='social-contact'>
    {data.map((contact)=>{
      return <a href={contact.link}>
        <div className='social-icon-div'></div>
        <img src={contact.icon} className='social-icon' alt='contact.platform'/>
      </a>
    })}
  </div>
}

export default SocialMedia

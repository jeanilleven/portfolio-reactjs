import React, {useEffect} from 'react'
import './social-media.css'
import { SocialMediaData } from '../../data/social'
import Aos from 'aos'
import 'aos/dist/aos.css'

function SocialMedia() {
  const data = SocialMediaData;
  useEffect(() => {
    Aos.init({});
  }, [])
  return <div className='social-contact' data-aos="flip-left">
    {data.map((contact)=>{
      return <a href={contact.link}>
        <div className='social-icon-div' ></div>
        <img src={contact.icon} className='social-icon' alt='contact.platform'/>
      </a>
    })}
  </div>
}

export default SocialMedia

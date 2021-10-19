import React,{ useEffect } from 'react'
import './skillcard.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function SkillCard({skill}) {
  useEffect(() => {
    Aos.init({});
  }, [])
  return (
    <div className='skillcard' data-aos="zoom-out-left" > 
      <div className='skill-icon'>
        {skill.icon}
      </div>
    </div>
  )
}

export default SkillCard

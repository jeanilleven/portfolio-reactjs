import React from 'react'
import './skillcard.css'

function SkillCard({skill}) {
  return (
    <div className='skillcard'>
      <div className='skill-icon'>
        {skill.icon}
      </div>
    </div>
  )
}

export default SkillCard

import React from 'react'
import './workcard.css'

function WorkCard({work}) {
  return (
    <div className='workcard'>
      <div className='work-info'>
        <label className='work-company'>{work.company}</label>
        <div className='work-dates'>
          <label >{work.dateJoined}</label> - <label>{work.dateEnd}</label>
        </div>
        <div className='work-description'>
          <p>{work.work}</p>
        </div>
      </div>
      <img src={work.logo} alt={work.company} className='work-logo'/>
    </div>
  )
}

export default WorkCard

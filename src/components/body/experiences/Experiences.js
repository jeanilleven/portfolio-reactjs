import React from 'react'
import './experiences.css'
import Separator from '../../../common/separator/Separator'
import { WorkData } from '../../data/work'
import WorkCard from './WorkCard'

function Experiences() {
  const data = WorkData
  return <div className='work'>
    <Separator />
    <label className='section-title'>Work Experiences</label>
    <div className='work-list'>
      {data.map((work)=>{
        return <WorkCard work={work}/>
      })}

    </div>
  </div>
}

export default Experiences

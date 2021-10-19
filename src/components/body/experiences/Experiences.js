import React,{ useEffect } from 'react'
import './experiences.css'
import Separator from '../../../common/separator/Separator'
import { WorkData } from '../../data/work'
import WorkCard from './WorkCard'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Experiences() {
  const data = WorkData
  useEffect(() => {
    Aos.init({});
  }, [])
  return <div className='work'>
    <Separator />
    <label className='section-title'>Work Experiences</label>
    <div className='work-list'  data-aos="zoom-in" >
      {data.map((work)=>{
        return <WorkCard work={work}/>
      })}

    </div>
  </div>
}

export default Experiences

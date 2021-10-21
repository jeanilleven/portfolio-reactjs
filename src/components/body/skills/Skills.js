import React,{ useEffect } from 'react'
import './skills.css'

import Separator from '../../../common/separator/Separator'
import SkillCard from './SkillCard'
import { SkillsData } from '../../data/skills'

import Aos from 'aos'
import 'aos/dist/aos.css'

function Skills() {
  const data = SkillsData
  
  useEffect(() => {
    Aos.init({});
  }, [])
  return <div className='skills'>
    <Separator />
    <label className='section-title'>Skills</label>
    <div className='skills-container' data-aos="zoom-in" >
      {data.map((type)=>{
        return <div className='skills-section' >
          <label className='skills-section-title'>{type.type}</label>
          <div className='skills-list'>
            {type.list.map((skill)=>{
              return <SkillCard skill={skill} />
            })}
          </div>
        </div>
      })}
    </div>
  </div>
}

export default Skills

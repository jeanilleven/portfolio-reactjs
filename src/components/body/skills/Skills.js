import React from 'react'
import './skills.css'

import Separator from '../../../common/separator/Separator'
import SkillCard from './SkillCard'
import { SkillsData } from '../../data/skills'

function Skills() {
  const data = SkillsData
  return <div className='skills'>
    <Separator />
    <label className='section-title'>Skills</label>
    <div className='skills-container'>
      {data.map((type)=>{
        return <div className='skills-section'>
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

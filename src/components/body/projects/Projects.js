import React from 'react'
import { ProjectsData } from '../../data/projects'
import ProjectCard from './ProjectCard'
import './Projects'
import Separator from '../../../common/separator/Separator'

function Projects() {
  const data = ProjectsData
  return <div className='projects'>
    <Separator />
    <label className='section-title'>Projects</label>
    {data.map((project)=>{
      return <ProjectCard project={project}/>
    })}
  </div>
}

export default Projects

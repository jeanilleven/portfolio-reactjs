import React,{ useEffect }  from 'react'
import { ProjectsData } from '../../data/projects'
import ProjectCard from './ProjectCard'
import './Projects'
import Separator from '../../../common/separator/Separator'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Projects() {
  const data = ProjectsData
  useEffect(() => {
    Aos.init({});
  }, [])
  return <div className='projects' >
    <Separator />
    <label className='section-title'>Projects</label>
    {data.map((project)=>{
      return <ProjectCard project={project}/>
    })}
  </div>
}

export default Projects

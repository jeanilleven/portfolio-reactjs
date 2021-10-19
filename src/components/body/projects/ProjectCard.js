import React from 'react'
import './projectcard.css'

function ProjectCard({project}) {
  return <div className='project-card' data-aos="zoom-in-up" >
    <div className='project-info'>
      <label className='project-title'>{project.title}</label>
      <p className='project-about'>
        {project.about}
      </p>
      <div className='project-tags'>
        {project.tags.map((tag)=>{
          return <label className='tagname'>{tag}</label>
        })}
      </div>
    </div>
    <img src={project.image} className='project-photo' alt={project.name}/>
  </div>
}

export default ProjectCard

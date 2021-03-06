import React from 'react'
import './body.css'

import About from './about/About'
import Projects from './projects/Projects'
import Skills from './skills/Skills'
import Achievements from './achievements/Achievements'
import Experiences from './experiences/Experiences'
import Contact from './contact/Contact'

function Body() {
  return <div className='body'>
    <section id='about'>
      <About />
    </section>
    <section id='projects'>
      <Projects />
    </section>
    <section id='skills'>
      <Skills />
    </section>
    <section id='achievements'>
      <Achievements />
    </section>
    <section id='experiences'>
      <Experiences />
    </section>
    <section id='contact'>
      <Contact />
    </section>
  </div>
}

export default Body

import React from 'react'
import './home.css'
import Header from '../header/Header.js'
import Body from '../body/Body'
import Footer from '../footer/Footer'

function Home() {
  return (
    <div>
      <div className='home-header'>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home

import React, { useEffect} from 'react'
import Separator from '../../../common/separator/Separator'
import './testimonials.css'
import { TestimonialsData } from '../../data/testimonials'
import '@brainhubeu/react-carousel/lib/style.css';

import Aos from 'aos'
import 'aos/dist/aos.css'

import { Carousel } from 'react-bootstrap'

function Testimonials() {
  const data = TestimonialsData
  useEffect(() => {
    Aos.init({});
  }, [])

  return (
    <div className='testimonials'>
      <Separator />
      <label className='section-title'>What do they say about me?</label>
      <div className='testimonials-container'>
        <Carousel variant="dark" data-aos='fade-up' fade>
          {data.map((testimony)=>{
            return <Carousel.Item>
              <div className='testimony-details'>
                <span className='testimony-card'>
                  <p className='testimony-name'>{testimony.name}</p>
                  <p className='testimony-comment'>"{testimony.feedback}"</p>
                </span>
              </div>
            </Carousel.Item>
            })}
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials

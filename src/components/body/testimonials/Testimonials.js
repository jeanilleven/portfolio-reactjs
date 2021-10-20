import React, {useState, useEffect} from 'react'
import Separator from '../../../common/separator/Separator'
import './testimonials.css'
import { TestimonialsData } from '../../data/testimonials'

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import Aos from 'aos'
import 'aos/dist/aos.css'

function Testimonials() {
  const data = TestimonialsData

  const [value, setValue] = useState(0);

  const onChange = value => {
  setValue(value);
  }

  useEffect(() => {
    Aos.init({});
  }, [])

  return (
    <div className='testimonials'>
      <Separator />
      <label className='section-title'>What do they say about me?</label>
      <div className='testimonials-container' data-aos="zoom-in-up">
        <Carousel plugins={['arrows', 'infinite']} value={value} onChange={onChange}>
          {data.map((testimony)=>{
            return <div className='testimony-details'>
              <img src={testimony.image} className='testimony-comment' alt='feedback'/>
            </div>
          })}
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials

import React, {useEffect} from 'react'
import './achievements.css'
import Separator from '../../../common/separator/Separator'
import Card from 'react-bootstrap/Card';
import { AwardsData } from '../../data/awards';

import Aos from 'aos'
import 'aos/dist/aos.css'

function Achievements() {
  const data = AwardsData
  useEffect(() => {
    Aos.init({});
  }, [])
  return <div className='awards'>
    <Separator />
    <label className='section-title'>Awards</label>
    <div className='awards-container'>
      {data.map((award)=>{
        return <Card style={{ width: '18rem' }} className='award-card' data-aos="zoom-out">
          <Card.Img variant="top" src={award.image}  className='award-image'/>
          <Card.Body>
            <Card.Title className='skills-section-title'>{award.award}</Card.Title>
            <Card.Text className='work-description'>{award.name}</Card.Text>
          </Card.Body>
        </Card>
      })}
    </div>
</div>
}

export default Achievements

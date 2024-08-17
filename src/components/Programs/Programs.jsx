import React from 'react'
import './Programs.css'
import image_2 from '../../assets/image-2.jpg'
import image_3 from '../../assets/image-3.png'
import image_4 from '../../assets/image-4.png'


function programs() {
  return (
    <div className='programs'>
        <div className="program">
            <img src={image_2} alt=""/>
            <div className="caption">
              <p>Discover, Plan, and Experience with TravelHuB!</p>
            </div>
        </div>

        <div className="program">
            <img src={image_3} alt=""/>
            <div className="caption">
              <p>Unlock Your Next Adventure with TravelHuB</p>
            </div>
        </div>

        <div className="program">
            <img src={image_4} alt=""/>
            <div className="caption">
              <p>Travel Smarter, Explore More with TravelHuB!</p>
            </div>
        </div>
    </div>

  )
}

export default programs
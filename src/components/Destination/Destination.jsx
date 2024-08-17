import React from 'react'
import './Destination.css'
import destination_1 from '../../assets/destination-1.jpg'
import destination_2 from '../../assets/destination-2.jpeg'
import destination_3 from '../../assets/destination-3.jpeg'
import destination_4 from '../../assets/destination-4.jpeg'

function Destination() {
  return (
    <div className='destinations'>
 <div className="destination">
  <img src={destination_1} alt="" />
  <img src={destination_2} alt="" />
  <img src={destination_3} alt="" />
 </div>
 <div className="destination">
 <img src={destination_4} alt="" />
 </div>
 <button className='btn dark-btn'>See more here </button>
    </div>
  )
}

export default Destination
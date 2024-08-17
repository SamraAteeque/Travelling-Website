import React from 'react'
import './About.css'
import image_7 from '../../assets/image-7.webp'

function About() {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={image_7} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>ABOUT TravellingHuB</h3>
        <h2>Where adventure meets comfort and convenience.</h2>
        <p>Welcome to TravellingHuB, your ultimate companion for unforgettable travel experiences! Whether you're a seasoned globetrotter or a first-time explorer.</p>
        <p>At TravellingHuB, we believe that travel is not just about the destination, but the journey itself. Our user-friendly interface allows you to explore a wide range of destinations, each with in-depth information on attractions, accommodations, dining options, and local tips.</p>
        <p>Join our vibrant community of travelers who share their experiences, tips, and reviews to help you make informed decisions. </p>
      </div>
    </div>
  )
}

export default About
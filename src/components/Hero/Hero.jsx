import React from 'react';
import './Hero.css';
import plane_takeoff from '../../assets/plane-takeoff.mp4';

function Hero() {
  return (
    <div className='hero container'>
      <video src={plane_takeoff} autoPlay loop muted className="hero-video"></video>
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <h1>Discover Your Perfect Adventure with TravelHuB</h1>
        <p>Explore the world like never before with TravelHuB, your ultimate travel companion! From finding the best destinations to planning your entire itinerary.</p>
        <button className='btn'>Explore More</button>
      </div>
    </div>
  );
}

export default Hero;


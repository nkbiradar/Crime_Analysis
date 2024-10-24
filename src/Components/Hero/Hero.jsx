import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.jpg'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1> Exploring Crime Patterns: Uncover Insights and Trends</h1>
        <p> Discover the hidden patterns in crime data. Analyze trends across various categories
             and locations to gain actionable insights,
             empowering communities and 
             authorities to make informed decisions and ensure public safety</p>
             <button className='btn'> Explore More <img src={arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero

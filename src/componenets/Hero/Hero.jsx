import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
const Hero = () => {
  return (
      <section className="hero-wrapper">
          <div className="paddings innerWidth flexCenter hero-container">
              {/* Left Section */}
              <div className="flexColStart hero-left">
                  <div className="hero-title">
                      <div className="orange-circle">
                          
                      </div>
                      <h1>
                          Discover <br />
                          Most Suitable <br />
                          Property
                      </h1>
                  </div>
                  <div className="flexColStart hero-des">
                      <span>
                          Find a variety of properties that suit you very easily
                      </span>
                      <span>Forget all difficulties in finding a residence for you</span>
                  </div>
                  <div className="search-bar">
                    <HiLocationMarker />
                  </div>
              </div>
              {/* Right Section */}
              <div className="flexCenter hero-right">
                  <div className="image-container">
                  <img src='./hero-image.png' alt='hero-image' />  
                  </div>
                  
              </div>
          </div>
    </section>
  )
}

export default Hero
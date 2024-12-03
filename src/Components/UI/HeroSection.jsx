import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <div>
      <main className='hero-section main'>
        <div className='container grid grid-two-cols'>
            <div className='hero-content'>
                <h1 className='heading-xl'>
                    Explore the World, One country at a Time.
                </h1>
                 <p className='paragraph'>
                    Discover the history, culture, and beauty of every nation, Sort, search, and filter through countries to find the details you need.
                 </p>
                  <button className='btn btn-darken btn-inline bg-white-box'>
                    Start Exploring <FaArrowRightLong />
                 </button>
              </div>
                <div className='hero-image'>
                  <img src="/images/world.png" alt="world beauty" className='banner-image' />

                </div>
            

        </div>

    </main>
    </div>
  )
}


import React from 'react'
import HeroContent from '../sub/HeroContent';
const Hero = () => {
  return (
   <div className="relative flex flex-col w-full h-full" id="hero">
     <video 
      autoPlay
      muted
      loop
      className="rotate-180 absolute top-[-340px] left-0 z-[1] w-fullh-full object-cover">
        <source src='/blackhole.webm' type='video/webm'/>
      </video>
      <HeroContent />
   </div>
  )
}

export default Hero
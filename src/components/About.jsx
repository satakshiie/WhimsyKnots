import React from 'react'
import about from "../assets/about.png"
import FadeInOnView from './FadeInOnView'


const About = () => {
  return (
    <section className="w-full bg-[#FFFBDD] text-fontGreen font-[Playfair] px-4 sm:px-6 md:px-10 lg:px-20 py-20">
    {/* Section Heading */}
    <FadeInOnView>
    <div className="text-center mb-10">
      <h2 className="text-4xl md:text-5xl font-[playfair]">Our Story</h2>
      <p className="text-md md:text-lg mt-4 max-w-2xl mx-auto">
        Whimsy Knots is born from a deep love for yarn, warmth, and the joy of slow crafting.
      </p>
    </div>
  

    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-60 max-w-6xl mx:auto md:ml-20">
      <img
        src=
        {about}
        alt="Founder or Studio"
        className="w-full md:w-1/2 object-cover"
      />
      <div className="md:w-1/2">
        <p className="text-md md:text-2xl text-center leading-relaxed">
        Hey there! I’m Namita - the hands behind 𝘉𝘺 𝘞𝘩𝘪𝘮𝘴𝘺 𝘒𝘯𝘰𝘵𝘴.What began in quiet corners is now a colorful little world of yarn and dreams.<br></br>
        At whimsy knots, every creation tells a story. We make everyday pieces-bags, coasters, keychains and more- crocheted  by hand and heart.</p><br></br>
        <h3 className='text-md md:text-3xl text-center koh-santepheap-light'>Designed To be Useful <br></br>Made To Be Soulful</h3>
      </div>
    </div>
    </FadeInOnView>
  </section>

      
  )
}

export default About

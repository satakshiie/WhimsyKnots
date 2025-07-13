import React from 'react'
import Hero from '../components/Hero'
import BestSellers from '../components/BestSellers'
import About from '../components/About'
import Featured from '../components/Featured'
import Contact from "../components/Contact"

const Home = () => {
  return (
    <div>
     <Hero/> 
     <BestSellers />
     <Featured/>
     <section id="about">
        <About />
      </section>
     <Contact/>
    </div>
  )
}

export default Home

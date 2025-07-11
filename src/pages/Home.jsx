import React from 'react'
import Hero from '../components/Hero'
import BestSellers from '../components/BestSellers'
import About from '../components/About'
import Featured from '../components/Featured'

const Home = () => {
  return (
    <div>
     <Hero/> 
     <BestSellers />
     <Featured/>
     <About />
    </div>
  )
}

export default Home

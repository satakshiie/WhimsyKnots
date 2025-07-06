import React from 'react';
import BAG from "../assets/BAG.png";
import { motion } from "framer-motion";

const Hero = () => {

    return (
        <section className="w-full bg-hero-gradient overflow-hidden  py-15 md:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-10 relative">
      
         {/* Left Content */}
        
<div className="w-full  md:w-1/2 relative pl-4 pt-10 pb-15 sm:pl-10 md:pl-20 lg:pl-40 flex flex-col justify-center  md:text-left text-center">
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
  viewport={{ once: true }}
  className="flex flex-col items-center justify-center text-center "
>
<h1 className="font-[Playfair] text-4xl md:text-5xl lg:text-7xl  text-fontGreen leading-tight">
  Whim
  <span style={{ fontFamily: "'Lavishly Yours', cursive" }} className="text-4xl md:text-5xl  lg:text-7xl">S</span>
  y
  <div className=" mt-[-12px] md:mt-[-30px]">
    <span style={{ fontFamily: "'Lavishly Yours', cursive" }} className=" text-4xl md:text-5xl  lg:text-7xl">K</span>
    nots
  </div>
</h1>

  <h2 className="font-[Playball] text-2xl md:text-3xl   lg:text-5xl mt-2 md:mt-4 text-yarnGreen  ">A crochet affair</h2>
  <p className="font-[Playfair] text-l md:text-xl  lg:text-3xl mt-1 text-yarnGreen text-center">
  Every stitch a story—<br />handcrafted just for you. Dive in!
</p>

  <div className="mt-6 flex  gap-4">
    <button className="font-[Playfair] bg-white text-yarnGreen px-5 py-2 shadow-lg hover:shadow-2xl transition-all duration-200 rounded-xl">Shop</button>
    <button className="font-[Playfair] bg-yarnGreen text-white px-5 py-2 shadow-lg hover:shadow-2xl transition-all duration-200 rounded-xl">Learn more</button>
  </div>
</motion.div>
</div>
      
            {/* Right Image */}
            <motion.div
initial={{ opacity: 0, y: 40, scale: 0.95 }}
whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1, ease: [0.1, 0., 0.25, 1] }}
  viewport={{ once: true }}
  className="relative flex-shrink-0">

              <img
                src={BAG}
                alt="Crochet Bag"
                className="w-full max-w-[400px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[700px] xl:max-w-[750px]"
              />
            </motion.div>
          </div>
        </section>
      );
    };

export default Hero;
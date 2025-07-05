import React from 'react';
import BAG from "../assets/BAG.png";
import yarn from "../assets/yarn.png";
import YarnStroke from './YarnStroke';

const Hero = () => {
  return (
    <section className="w-full bg-hero-gradient overflow-hidden py-10 md:py-10">
    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
    {/* Left Content */}
    <div className="w-full max-w-xl mx-auto px-6 py- md:w-1/2 text-center md:text-left">

    <img
    src={yarn}
    alt="Yarn Ball"
    className="absolute left-25 bottom-0 w-40 md:w-56 -translate-x-full md:-translate-x-1/2"
  />
  <YarnStroke />
          <h1 className="font-[Playfair] text-4xl md:text-6xl text-fontGreen leading-tight">
            Whim
            <span style={{ fontFamily: "'Lavishly Yours', cursive" }} className="text-6xl">S</span>
            y<br />
            <span style={{ fontFamily: "'Lavishly Yours', cursive" }} className="text-6xl">K</span>
            nots
          </h1>

          <h2 className="font-[Playball] text-3xl mt-4 text-yarnGreen">A crochet affair</h2>
          <p className=" font-[Playfair] text-2xl mt-2 text-yarnGreen">
            Every stitch a story-<br />handcrafted just for you. Dive in!
          </p>

          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button className="font -[Playfair]  bg-white text-yarnGreen px-5 py-2 shadow-lg hover:shadow-2xl transition-all duration-200 rounded-xl">Shop</button>
            <button className="font -[Playfair]  bg-yarnGreen text-white px-5 py-2  shadow-lg hover:shadow-2xl transition-all duration-200 rounded-xl">Learn more</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex-shrink-0">
          <img src={BAG} alt="Crochet Bag" className="w-full max-w-[400px] md:max-w-[750px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
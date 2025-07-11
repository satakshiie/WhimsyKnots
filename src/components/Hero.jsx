import React from 'react';
import bgyarn from "../assets/bgyarn.png"; // your imported image


const headingText = "BRING YOUR CROCHET DREAMS TO LIFE";
const Hero = () => {
  const words = headingText.split(" ");
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bgyarn})`,
      }}
    >

      <div className="relative z-10 text-center px-6 max-w-4xl">
      <h1 className="text-4xl md:text-5xl lg:text-7xl mb-4 font-extrabold flex flex-wrap justify-center gap-4 font-[Monserrat]">
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block animate-fadeUp"
              style={{ animationDelay: `${i * 0.18}s`, animationFillMode: 'both' }}
            >
              {word}
            </span>
          ))}
        </h1>
        <p className=" text-4xl md:text-5xl lg:text-6xl pt-4  font-[Dancing_Script] mb-10 animate-fadeUp" 
          style={{ animationDelay: "1.3s", animationFillMode: "both" }}>
          By Whimsy Knots
        </p>

        <div className="mt-6 flex justify-center gap-4 animate-fadeUp "  
         style={{ animationDelay: "1.3s", animationFillMode: "both" }}>
          <button className="bg-white text-fontGreen px-6 py-2 rounded-full shadow hover:scale-105 transition">
            Shop
          </button>
          <button className="bg-fontGreen text-white px-6 py-2 rounded-full shadow hover:scale-105 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
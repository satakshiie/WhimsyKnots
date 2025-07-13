import React, { useRef } from 'react';
import evileye from "../assets/evileye.png";
import sunflower from "../assets/sunflower.png";
import  black from "../assets/black.png";
import  keychain from "../assets/keychain.png";
import FadeInOnView from './FadeInOnView';
import tote from "../assets/tote.png";
import coaster from "../assets/coaster.png";
import { ChevronLeft, ChevronRight } from "lucide-react";


const products = [
  {
    title: "Evil-Eye Keychain",
    price: "$180",
    image: evileye,
  },
  {
    title: "Sunflower Keychain",
    price: "$150",
    image: sunflower,
  },
  {
    title: "Orange ToteBag",
    price: "$200",
    image: tote,
  },
  {
    title: "B/W Coaster",
    price: "$150",
    image: black,
  },
  {
    title: "Pink Coaster",
    price: "$100",
    image:  coaster,
  },
  {
    title: "Butterfly Keychain",
    price: "$150",
    image: keychain,
  },
];

const Featured = () => {
  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -320,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 320,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full bg-[#FEF6B7] text-fontGreen font-[Playfair] px-4 sm:px-6 md:px-10 lg:px-30 py-20">
      <div className="text-center mb-10">
        <FadeInOnView>
          <h1 className="text-4xl md:text-5xl">Featuring Our Loved Creations</h1>
          <h2 className="text-xl md:text-xl py-4">It could be yours today 🤍</h2>
        </FadeInOnView>
      </div>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#FEF6B7] p-2 rounded-full shadow-lg hidden md:block"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#FEF6B7] p-2 rounded-full shadow-lg hidden md:block"
        >
          <ChevronRight size={24} />
        </button>

        {/* Scrollable Product Row */}
        <div
  ref={sliderRef}
  className="flex gap-10 overflow-x-auto no-scrollbar scroll-smooth px-4 py-4"
>    {products.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[250px] h-[390px] md:w-[300px] lg:w-[300px] lg:h-[420px] bg-[#FFFBDD] rounded-3xl shadow-lg flex flex-col items-center justify-center text-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[200px] h-[300px] md:w-[250px] object-cover object-center rounded-2xl"
              />
              <h3 className="text-lg font-[Playfair] mt-4 text-fontGreen">{item.title}</h3>
              <p className="text-md text-gray-700 font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
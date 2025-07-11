import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import strawberry from "../assets/strawberry.png";
import flower from "../assets/flower.png";
import daisy from "../assets/daisy.png";
import holder from "../assets/holder.png"
import FadeInOnView from './FadeInOnView';
import Octopus from "../assets/Octopus.png"
import flower_pot from "../assets/flower_pot.png"


const products = [
    {
        title: "Red Flower Bag",
        price: "$180",
        image: flower,
      },
      {
        title: "Octopus Keychain",
        price: "$150",
        image: Octopus,
      },
  {
    title: "Daisy ToteBag",
    price: "$200",
    image: daisy,
  },
  {
    title: "Flower Pot",
    price: "$150",
    image: flower_pot,
  },
  {
    title: "Strawberry Coin Purse",
    price: "$100",
    image: strawberry,
  },
  {
    title: "Sunglass case",
    price: "$150",
    image: holder,
  },
];

const BestSellers = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
  
    const total = products.length-1;
    const x = useTransform(scrollYProgress, [0, 1], [0, -total * 310]);
    const smoothX = useSpring(x, { stiffness: 100, damping: 30 });
  
    return (
      <section className="w-full bg-[#FFFBDD] px-4 md:px-10">
          
          <div ref={ref} className="relative h-[1000vh] sm:h-[1000vh] md:h-[700vh] lg:h-[400vh]">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-x-hidden">
          <div className="text-center mb-20 -mt-10">
        <FadeInOnView><h2 className="text-fontGreen font-[Playfair]  text-4xl md:text-5xl">Our Best Sellers</h2>
          <p className="text-lg font-[Playfair] md:text-xl mt-2 text-fontGreen">
            Little handcrafted joys people keep coming back for.
          </p>
          </FadeInOnView>
        </div>
  
          <div className="bg-[#FEF6B7] rounded-[80px] py-15 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-24 w-full max-w-[1000px] xl:max-w-[1400px] mx-auto overflow-x-hidden">
              <motion.div style={{ x: smoothX }} className="flex gap-10 w-fit">
              {products.map((item, index) => {
const cardCenter = index * 510 + 150; 
const containerCenter = window.innerWidth / 2;

const distance = useTransform(smoothX, (latestX) => {
  const currentCenter = -latestX + containerCenter;
  return Math.abs(currentCenter - cardCenter);
});

 const scale = useTransform(distance, [0, 300], [1.1, 0.9]);
 const blur = useTransform(distance, [0, 300], ['blur(0px)', 'blur(0.2px)']);

  
                  return (
                    <motion.div
                      key={index}
                      className="flex-shrink-0 w-[250px] h-[390px] md:w-[300px] lg:w-[300px] lg:h-[420px] bg-[#FFFBDD] rounded-3xl shadow-lg flex flex-col items-center justify-center text-center"
                      style={{ scale, filter: blur }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-[200px] h-[250px] md:w-[250px] lg:w-[250px] object-cover  object-center rounded-t-2xl"
                      />
      
                      <h3 className="text-lg font-[Playfair] mt-4 text-fontGreen">{item.title}</h3>
                      <p className="text-md text-gray-700 font-semibold">{item.price}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  };
export default BestSellers;
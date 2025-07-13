import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import border from "../assets/border.png"
import open from "../assets/open.png"
import phone from "../assets/phone.png"
import close from "../assets/close.png"
import insta from "../assets/insta.png"
import  mail from "../assets/mail.png"

const Contact = () => {
    const { ref, inView } = useInView({ triggerOnce: true });
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsOpen(true);
      const envelopeTimer = setTimeout(() => {
        setIsOpen(false);
      }, 1000); // Envelope animation duration
  
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 1200); // Start text animation *after* envelope closes
  
      return () => {
        clearTimeout(envelopeTimer);
        clearTimeout(textTimer);
      };
    }
  }, [inView]);
    
  return (
<section className="bg-[#FFFBDD] pt-20 md:pt-[10rem] lg:pt-[20rem] pb-10 px-6 md:px-20  lg:px-70 text-fontGreen font-[Playfair] relative overflow-hidden">

   <div className="absolute top-0 left-0 w-full z-10">
     <img src={border} alt="Scallop border" className="w-full object-cover" />
</div>


      <div className="flex flex-col md:flex-row justify-between items-center text-center md:items-start gap-10 z-20 relative">

      <div
  className={`md:max-w-md transition-all duration-1000 ease-out transform ${
    showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
  <h2 className="text-3xl md:text-4xl lg:text-5xl mb-2 leading-snug font-[playfair]">
    Have an idea and don’t<br />see it on the page?
  </h2>
  <p className="italic font-[Dancing Script] text-lg md:text-xl lg:text-2xl">we are open for customization!</p>
  <p className="mt-2 font-semibold">
    <span className="font-bold lg:text-lg">dm us at </span>bywhimsyknot-link
  </p>
</div>

<div
  className={`transition-all duration-1000 ease-out transform ${
    showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
  <h3 className="text-3xl  lg:text-5xl mb-4">Get in Touch</h3>
  <ul className="space-y-3 text-lg">
    <li className='flex items-center gap-2'><img src={phone} alt="phone" className="w-5 h-5"/> +91 xxx xxx xxxx</li>
    <li className='flex items-center gap-2'><img src={insta} alt="insta" className="w-5 h-5"/>  bywhimsyknots</li>
    <li className='flex items-center gap-2'><img src={mail} alt="mail" className="w-5 h-5"/>  xxx</li>
  </ul>
</div>
        </div>
        <div ref={ref} className="flex justify-center mt-20 z-20 relative">
        <img
        src={isOpen ? open : close}
        alt="Envelope"
        className={`w-52 md:w-80 h-auto transition-all duration-900 ease-in-out transform ${
          isOpen ? 'scale-125 -translate-y-10'  : 'scale-100 translate-y-0'
        }`}
      />
      </div>
    </section>
  )
}

export default Contact
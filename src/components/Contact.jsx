import React, { useState, useEffect } from 'react';
import border from "../assets/border.png"
import open from "../assets/open.png"
import close from "../assets/close.png"
 
const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
          setIsOpen(true);
          setTimeout(() => {
            setIsOpen(false); // Close again after showing open
          }, 2500); // open duration
        }, 1000); // delay after page load or scroll into view
    
        return () => clearTimeout(timeout);
      }, []);
    
  return (
<section className="bg-[#FFFBDD] pt-20 md:pt-[20rem] pb-10 md:px-20 px-6 md:px-70 text-fontGreen font-[Playfair] relative overflow-hidden">

   <div className="absolute top-0 left-0 w-full z-10">
     <img src={border} alt="Scallop border" className="w-full object-cover" />
</div>


      <div className="flex flex-col md:flex-row justify-between items-start gap-10 z-20 relative">

        <div className="md:max-w-md">
          <h2 className="text-3xl md:text-4xl mb-2 leading-snug">
            Have an idea and don’t<br />see it on the page?
          </h2>
          <p className="italic font-[Dancing Script] text-lg">we are open for customization!</p>
          <p className="mt-2 font-semibold">
            <span className="font-bold">dm us at </span>bywhimsyknot-link
          </p>
        </div>


        <div>
          <h3 className="text-3xl mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-lg">
            <li>📞 +91 xxx xxx xxxx</li>
            <li>📸 bywhimsyknots</li>
            <li>📧 xxx</li>
          </ul>
        </div>
        </div>
        <div className="flex justify-center mt-20 z-20 relative">
        <img
          src={isOpen ? open : close}
          alt="Envelope"
          className="w-52 h-auto transition-all duration-500 transform scale-100"
        />
      </div>
     \
    </section>
  )
}

export default Contact
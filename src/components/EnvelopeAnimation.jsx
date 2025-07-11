import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import close from "../assets/close.png";
import open from "../assets/open.png";

const EnvelopeAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ scale: 1.2, opacity: 1, transition: { duration: 0.5 } });
      await controls.start({ opacity: 0, transition: { duration: 0.2 } });
      await controls.start({ opacity: 1, transition: { duration: 0.2 } });
      await controls.start({ scale: 0.8, y: 100, transition: { duration: 1 } });
    };
    sequence();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <motion.img
        src={close}
        alt="Envelope"
        animate={controls}
        initial={{ scale: 0.5, opacity: 0 }}
        className="w-48 md:w-64"
      />
    </div>
  );
};
export default EnvelopeAnimation
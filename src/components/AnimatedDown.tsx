"use cliente";

import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const AnimatedDown = () => {
  return (
    <motion.div
      initial={{
        y: 0,
        rotate:0
      }}
      animate={{
        y: [8,0,8,0,8,0,8,0,8,0,8,0,8,0,8,0,8,0,8],
        rotate: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,90,180,270,360],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
      }}
    >
      <FaArrowDown className="text-black dark:text-white" size='1.5rem'/>
    </motion.div>
  );
};

export default AnimatedDown;

"use client"

import {motion} from "motion/react";
import Typewriter from "typewriter-effect";
import './splashscreen.css'

type SplashScreenProps = {
  finishLoading: () => void;
};

const SplashScreen = ({ finishLoading }: SplashScreenProps) => {
  const onAnimationComplete = () => {
    finishLoading();
  };

  return (
    <motion.div
      className="splashscreen"
      animate={{
        opacity: [1, 1, 0],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.85, 1],
      }}
      onAnimationComplete={onAnimationComplete}
    >
      <Typewriter
        options={{
          delay: 25,
          cursor:"",
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`<span>Elson Ramos </span>`)
            .pauseFor(500)
            .typeString(`<span>• <strong class="spacing">Web Developer</strong></span>`)
            .start();
        }}
      />
    </motion.div>
  );
};

export default SplashScreen;

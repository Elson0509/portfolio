"use cliente";

import { motion } from "framer-motion";
import { Geist_Mono } from "next/font/google";

type TitleSectionProps = {
  text: string;
};

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

const TitleSection = ({ text }: TitleSectionProps) => {
  return (
    <motion.p initial={{scale: 1}} className={`md:text-3xl text-xl font-medium text-green-700 dark:text-green-300 md:mb-5 mb-3 font-sans tracking-wider ${geistMono.className}`}>
      {text}
    </motion.p>
  );
};

export default TitleSection;

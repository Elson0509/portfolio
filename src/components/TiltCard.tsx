import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import "./tiltCard.css";
import { FaExternalLinkAlt } from "react-icons/fa";

type TiltCardProps = {
  link: string;
  imgPath: string;
};

const TiltCard = ({link, imgPath}: TiltCardProps) => {
  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;

  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="tilt-container"
    >
      <a href={link} target="_blank" rel="noreferrer"
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          background: `url(${imgPath})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="tilt-translate"
      >
        <div className="tilt-icon-wrapper">
          <FaExternalLinkAlt className="tilt-pointer" />
        </div>
      </a>
    </motion.div>
  );
};

export default TiltCard;

"use client"
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

const Counter = ({target}: {target: number}) => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const { inView } = useInView(ref);

  useEffect(() => {
    const animation = animate(0, target, {
      duration: 4,
      ease: "easeOut",
      onUpdate: (prev:number) => setCount(Math.floor(prev)),
    });

  }, [inView, target]);	
  
    return <div ref={ref}><p>{count}+</p></div>
};

export default Counter

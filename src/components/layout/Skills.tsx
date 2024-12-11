import { useEffect, useRef, useState } from "react";
import "./skills.css";
import { motion, useScroll, useTransform } from "motion/react";
import { Quantico } from "next/font/google";
import Title from "../texts/Title";

type SkillItem = {
  id: number;
  name: string;
  img: string;
};

const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400"],
});

const Skills = () => {
  const skillsList: SkillItem[] = [
    {
      id: 1,
      name: "HTML5",
      img: "/imgs/skills/html5.png",
    },
    {
      id: 2,
      name: "Javascript",
      img: "/imgs/skills/javascript.png",
    },
    {
      id: 3,
      name: "CSS3",
      img: "/imgs/skills/css3.png",
    },
    {
      id: 4,
      name: "Responsive Design",
      img: "/imgs/skills/responsive-design.png",
    },
    {
      id: 5,
      name: "React",
      img: "/imgs/skills/react.png",
    },
    {
      id: 6,
      name: "React Native",
      img: "/imgs/skills/react.png",
    },
    {
      id: 7,
      name: "Redux",
      img: "/imgs/skills/redux.png",
    },
    {
      id: 8,
      name: "Typescript",
      img: "/imgs/skills/typescript.png",
    },
    {
      id: 9,
      name: "NodeJs",
      img: "/imgs/skills/nodejs.png",
    },
    {
      id: 10,
      name: "Docker",
      img: "/imgs/skills/docker.png",
    },
    {
      id: 11,
      name: "PostgreSQL",
      img: "/imgs/skills/postgresql.png",
    },
    {
      id: 12,
      name: "Rest API",
      img: "/imgs/skills/rest-api.png",
    },
  ];

  const listItem = (item: SkillItem) => {
    return (
      <motion.div
        className="skillItem highlightHover"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1.5,
          },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        key={item.id}
      >
        <div className="skillImg">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="skillText">
          <h2 className={`${quantico.className}`}>{item.name}</h2>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="skills" id="skills">
      <div className="highlightHover">
        <Title title="My Skill List" />
      </div>
      <div className="skillsList">
        {skillsList.map((item) => listItem(item))}
      </div>
    </section>
  );
};

export default Skills;

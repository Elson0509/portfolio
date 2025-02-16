import React from "react";
import "./wordpressprojects.css";
import { Simonetta } from "next/font/google";
import Title from "../texts/Title";
import TiltCard from "../TiltCard";

const simonetta = Simonetta({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const WordpressProjects = () => {
  return (
    <section className="wordpress">
      <div className="wordpressSection right">
        <div className="tilt-cards">
          <TiltCard
            imgPath="/imgs/wordpress/simplific.png"
            link="https://simplificsolutions.com.br"
          />
          <TiltCard
            imgPath="/imgs/wordpress/securewatch.png"
            link="https://securewatch.com.br"
          />
          <TiltCard
            imgPath="/imgs/wordpress/albra_service.png"
            link="https://albraservice.com.br"
          />
        </div>
      </div>
      <div className="wordpressSection">
        <div className="left">
          <Title title="WordPress Projects – Solutions for Businesses" />
          <div className="wordpressDescription">
            <p className={`${simonetta.className}`}>
              I also have experience designing and developing WordPress websites
              tailored for small businesses. My focus is on creating responsive,
              secure, and easy-to-manage websites that help businesses establish
              a strong online presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordpressProjects;

import "./projectheader.css";
import { Kufam, Poppins, Source_Code_Pro } from "next/font/google";
import { ImAndroid } from "react-icons/im";
import { BsGlobe2 } from "react-icons/bs";

const kufam = Kufam({
  subsets: ["latin"],
  weight: ["500"],
});

const merriweather = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const ProjectHeader = () => {
  return (
    <div className={merriweather.className}>
      <div className="pheader">
        <h1 className="title">
          Featured Project
          <br />
          <span className={kufam.className}>Ronda Fácil</span>
        </h1>
        <div className="pheaderDescription">
          <div className="left">
            <p>
              Ronda Fácil (Easy Round) simplifies service and patrol management
              for administrators in Brazilian companies and condominiums. This
              cross-platform application provides real-time monitoring and
              inspection capabilities, improving operational efficiency and
              accountability. It&apos;s currently used daily by employees, ensuring a
              modern and user-friendly inspection process.
            </p>
          </div>
          <div className="right">
            <iframe
              src="https://www.youtube.com/embed/TpqyF9om86w?si=fMOhd9xV_i68Qm5r&amp;controls=0"
              title="Ronda Fácil - Funcionalidade"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <hr />
        <div className="features">
          <div className="item">
            <h3 className={poppins.className}>Technology</h3>
            <p>Node.js | React Native | Next.Js</p>
          </div>
          <div className="item">
            <h3 className={poppins.className}>Client</h3>
            <p>Securewatch Solutions</p>
          </div>
          <div className="item counter">
            <h3 className={poppins.className}>Patrols Done</h3>
            <p>345</p>
          </div>
          <div className="item counter">
            <h3 className={poppins.className}>Daily Points Read</h3>
            <p>34</p>
          </div>
          <div className="item">
            <h3 className={poppins.className}>Platforms</h3>
            <p>
              <a href="https://play.google.com/store/apps/details?id=com.newronda" rel="noreferrer nofollow" target="_blank"><ImAndroid /></a>
              <a href="https://rondafacil.com.br/" rel="noreferrer nofollow" target="_blank"><BsGlobe2 /></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;

import { Suspense } from "react";
import Link from "next/link";
import "./project.css";
import { motion } from "framer-motion";
import { Chakra_Petch, Simonetta } from "next/font/google";

const chakra = Chakra_Petch({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const simonetta = Simonetta({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const Project = () => {
  return (
    <section className="project" id="project">
      <div className="projectSection">
        <div className="left">
          <h1 className={`projectTitle ${chakra.className}`}>Featured Project</h1>
          <div className="projectDescription">
            <p className={`${simonetta.className}`}>
              A modern solution for patrol execution and service monitoring,
              available on Android. Ronda Fácil empowers administrators to
              manage schedules, tasks, and employee activities effectively.
              Staff members perform patrols and services by scanning NFC tags,
              with the ability to upload photos and comments. The platform
              ensures seamless communication and provides detailed reports for
              improved oversight and decision-making.
            </p>
          </div>
          <Link href="/web/featureproject" className="button">
            View Project Details
          </Link>
        </div>
      </div>
      <div className="projectSection right">
        <div className="pVideo prevent-select">
          <Suspense fallback="loading...">
            <video
              preload="false"
              playsInline={false}
              className="video"
              autoPlay={true}
              loop={true}
              muted={true}
              controlsList="nodownload"
            >
              <source
                data-src="/videos/cellphone.webm"
                type="video/webm"
                src="/videos/cellphone.webm"
              />
            </video>
          </Suspense>
        </div>
        <motion.div
          className="pImage prevent-select"
          whileHover={{ scale: 0.8 }}
          whileTap={{ scale: 1 }}
        >
          <img
            src="/imgs/mockup-min.png"
            alt="Mockup Ronda Fácil"
            className="mockImage"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Project;

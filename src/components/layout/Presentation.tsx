import "./presentation.css";
import AnimatedDown from "../AnimatedDown";
import { Raleway } from "next/font/google";
import { motion } from "motion/react";

const relaway = Raleway({
  subsets: ["latin"],
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

const itemSocialMedia = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 100 },
};

const Presentation = () => {
  return (
    <section className="presentation" id="#presentation">
      {/* Left Section */}
      <div className="pSection left">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="pTitle"
        >
          Hey There,
          <br />
          <span>I&apos;m Elson</span>
        </motion.h1>
        {/* Links List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={list}
          className="pLinkList"
        >
          <motion.h2 className={`${relaway.className}`} variants={item}>
            Web Developer
          </motion.h2>
          <motion.ul>
            <motion.li variants={item}>
              <a href="#skills">Skills</a>
            </motion.li>
            <motion.li variants={item}>
              <a href="#project">Featured Project</a>
            </motion.li>
            <motion.li variants={item}>
              <a href="#contact">Contact</a>
            </motion.li>
          </motion.ul>
        </motion.div>
        <div className="pAnimatedArrow">
          <AnimatedDown />
        </div>
      </div>
      {/* Right Section */}
      <div className="pSection right">
        <div className="socialmedias">
          <motion.div
            className="socialmediasList"
            initial="hidden"
            whileInView="visible"
            variants={list}
          >
            <motion.ul>
              <motion.li variants={itemSocialMedia} className="prevent-select">
                <a
                  href="https://github.com/Elson0509"
                  rel="noreferrer nofollow"
                  target="_blank"
                >
                  <img src="/imgs/socialmedias/github.png" alt="Github" />
                </a>
              </motion.li>
              <motion.li variants={itemSocialMedia} className="prevent-select">
                <a
                  href="https://www.linkedin.com/in/elson-ramos-519729ab"
                  rel="noreferrer nofollow"
                  target="_blank"
                >
                  <img src="/imgs/socialmedias/linkedin.png" alt="Linkedin" />
                </a>
              </motion.li>
              <motion.li variants={itemSocialMedia} className="prevent-select">
                <a
                  href="https://www.instagram.com/elson.0509/?hl=en"
                  rel="noreferrer nofollow"
                  target="_blank"
                >
                  <img src="/imgs/socialmedias/instagram.png" alt="Instagram" />
                </a>
              </motion.li>
              <motion.li variants={itemSocialMedia} className="prevent-select">
                <a href="mailto:elson.0509@gmail.com">
                  <img src="/imgs/socialmedias/email.png" alt="Email" />
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
      {/* Background */}
      <div className="bg prevent-select">
        <div className="pImg">
          <img src="imgs/profile.png" alt="Profile Background" />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
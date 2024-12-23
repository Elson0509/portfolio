import "./projectheader.css";
import { Kufam, Poppins, Source_Code_Pro } from "next/font/google";

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nec quam a ipsum bibendum viverra et in felis. Sed dapibus nulla
              ut sagittis dictum. Sed iaculis ipsum nunc, quis suscipit enim
              tincidunt et. Vivamus consequat laoreet scelerisque. Aenean
              bibendum enim quis erat ultrices, nec bibendum sem vehicula. Morbi
              ac venenatis diam, sed faucibus massa. Donec velit quam, maximus
              vitae placerat id, accumsan vel dui. Pellentesque sed porta
              sapien. Quisque tempor placerat elit.
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
          <div className='item'>
            <h3 className={poppins.className}>Technology</h3>
            <p>In sapien ante, congue non libero ac, imperdiet tincidunt erat. </p>
          </div>
          <div className="item">
            <h3 className={poppins.className}>Client</h3>
            <p>In sapien ante, congue non libero ac, imperdiet tincidunt erat. </p>
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
            <h3 className={poppins.className}>Feature 5</h3>
            <p>In sapien ante, congue non libero ac, imperdiet tincidunt erat. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;

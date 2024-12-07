import { Suspense } from "react";
import "./project.css";

const Project = () => {
  return (
    <section className="project" id="project">
      <div className="presentationSection left"></div>
      <div className="presentationSection right">
        <div className="pVideo">
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
        <div className="pImage">
          <img
            src="/imgs/mockup-min.png"
            alt="Mockup Ronda Fácil"
            className="mockImage"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;

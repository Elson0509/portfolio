import AnimatedDown from "../AnimatedDown";
import Image from "next/image";
import TitleSection from "../TitleSection";

const Presentation = () => {
  return (
    <section className="flex items-center justify-center p-20 md:h-screen relative" id="#presentation">
      <div className="container mx-auto max-w-screen-lg flex md:flex-row justify-between md:gap-8 gap-4 flex-col-reverse">
        <div className="md:w-1/2 content-center">
          <Image
            src="/imgs/street.png"
            alt="Elson Ramos Web Developer"
            width={1000}
            height={1000}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="md:w-1/2 content-center md:p-4 p-2">
          <TitleSection text="Hi, I'm Elson Ramos!" />
          <p className="md:text-lg text-base font-medium text-slate-700 dark:text-gray-300 md:mb-5 mb-3 text-justify tracking-wide">
            I&apos;m a{" "}
            <span className="font-bold hover:text-sky-500">web developer</span>{" "}
            based in London, Ontario, with a background in building web and
            mobile applications. My passion lies in learning new technologies
            and integrating them into innovative systems.
          </p>
          <p className="md:text-lg text-base font-medium text-slate-700 dark:text-gray-300 md:mb-5 mb-3 text-justify tracking-wide">
            What I enjoy most about programming is learning new technologies and
            applying them to systems. The skills listed below reflect my
            commitment to staying at the forefront of the industry, continuously
            learning, and adhering to the latest best practices in development.
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 md:visible invisible">
        <AnimatedDown />
      </div>
    </section>
  );
};

export default Presentation;

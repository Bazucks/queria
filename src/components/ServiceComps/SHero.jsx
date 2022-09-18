import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

const SHero = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-full bg-slate-100 dark:bg-slate-900 transition-all duration-300 h-screen px-4 pb-16 items-center relative top-[80px] flex flex-col lg:flex-row justify-center">
      <img
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="20"
        data-aos-once="true"
        src={props.img}
        alt={props.alt}
        className="object-cover w-full md:w-3/4 lg:w-2/4 xl:w-2/5 drop-shadow-xl"
      />
      <div className="px-3 py-2 max-w-[900px] text-center lg:text-right">
        <h1
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="20"
          data-aos-once="true"
          className="text-4xl md:text-5xl lg:text-6xl font-medium py-2 text-slate-800 dark:text-slate-200 "
        >
          {props.heading}
        </h1>
        <h4
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="90"
          data-aos-once="true"
          className="text-xl md:text-2xl lg:text-3xl font-normal italic py-1 text-slate-600 dark:text-slate-300"
        >
          {props.underheading}
        </h4>
        <Link to="about">
          <button
            data-aos="flip-down"
            data-aos-offset="200"
            data-aos-delay="160"
            data-aos-once="true"
            className="px-4 py-2 my-6 border rounded-lg text-3xl md:text-4xl lg:text-5xl font-medium lg:py-4 text-[#6763ff] border-[#6763ff] hover:text-white hover:bg-gradient-to-r from-[#ae04f5] to-[#6763ff] duration-[250ms] ease-linear"
          >
            {props.button}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SHero;

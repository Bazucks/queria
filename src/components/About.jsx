import React from "react";
import aboutImg from "../assets/about.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="about"
      className="w-full py-16 bg-zinc-200 dark:bg-slate-900 transition-all duration-300 dark:text-slate-200 justify-center"
    >
      <div className="flex flex-col md:flex-row px-6 mt-10 justify-center rounded-3xl w-full">
        <div className="block md:hidden">
          <h1
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-once="true"
            className="text-4xl md:text-5xl lg:text-6xl text-center font-medium "
          >
            Who are We?
          </h1>
          <hr
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="60"
            data-aos-once="true"
            className="w-1/2 mx-auto py-4 mt-4"
          />
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-once="true"
            className="font-normal text-lg md:text-xl lg:text-2xl max-w-4xl text-center"
          >
            <span
              className="
            font-medium text-violet-800 dark:text-violet-300 italic"
            >
              Queria
            </span>{" "}
            is a service-based digital Agency, created to enhance small and
            Start-Up businesses and lead them through the right path to
            accomplishing their goals.
          </p>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="600"
            data-aos-once="true"
            className="font-normal w-fit  text-xl md:text-2xl lg:text-3xl max-w-4xl text-center mx-auto mt-6 xl:mt-24"
          >
            <a href="#platforms">
              {" "}
              <p className="italic hover:tracking-wide hover:underline underline-offset-4 hover:underline-offset-8 duration-300 transition-all font-bold text-violet-800 dark:text-violet-300">
                <span className=" dark:text-slate-200 text-violet-900">
                  Let's Grow
                </span>{" "}
                <span className="italic uppercase font-semibold">
                  Together!
                </span>
              </p>
            </a>
          </p>
          <p
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="400"
            data-aos-once="true"
            className="font-normal text-lg md:text-xl lg:text-2xl max-w-4xl text-center md:text-right mt-12 xl:mt-48"
          >
            We are ready to collaborate. No matter of the problem!
          </p>
        </div>
        <img
          src={aboutImg}
          alt="AboutBG"
          className="max-w-xl items-start md:w-1/2"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-once="true"
        />
        <div className="hidden md:block">
          <h1
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-once="true"
            className="text-3xl md:text-4xl lg:text-5xl text-center font-medium "
          >
            Who are We?
          </h1>
          <hr
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="60"
            data-aos-once="true"
            className="w-1/2 mx-auto py-4 mt-4 "
          />
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-once="true"
            className="font-normal text-lg md:text-xl lg:text-2xl max-w-4xl text-center md:text-right"
          >
            <span
              className="
            font-medium text-violet-800 dark:text-violet-300 italic"
            >
              Queria
            </span>{" "}
            is a service-based digital Agency, created to enhance small and
            Start-Up businesses and lead them through the right path to
            accomplishing their goals.
          </p>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="700"
            data-aos-once="true"
            className="font-normal text-lg md:text-xl lg:text-2xl max-w-4xl text-center md:text-right mt-12 xl:mt-24"
          >
            We are ready to collaborate. No matter of the problem!
          </p>
          <p className="font-normal  text-xl md:text-2xl lg:text-3xl max-w-4xl text-right md:text-right mt-6 xl:mt-24">
            <a href="#platforms">
              {" "}
              <p
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="900"
                data-aos-once="true"
                className="italic hover:tracking-wide hover:underline underline-offset-4 hover:underline-offset-8 duration-300 transition-all font-bold text-violet-800 dark:text-violet-300"
              >
                <span className=" dark:text-slate-200 text-violet-900">
                  Let's Grow
                </span>{" "}
                <span className="italic uppercase font-semibold">
                  Together!
                </span>
              </p>
            </a>
          </p>
          {/* may put a second paragraph under that one, with a delayed animation, when one added */}
        </div>
      </div>
    </div>
  );
};

export default About;

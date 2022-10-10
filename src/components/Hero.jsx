import React from "react";
import {
  UsersIcon,
  PaperAirplaneIcon,
  PresentationChartBarIcon,
  DesktopComputerIcon,
} from "@heroicons/react/solid";
import bgLand from "../assets/bgLand.png";

const Hero = () => {
  return (
    <div
      name="home"
      id="home"
      className="w-full h-screen bg-zinc-200 dark:bg-slate-900 flex flex-col justify-between transition-all duration-300"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col mt-[5.4rem] sm:mt-[4rem] sm:space-x-[10rem] md:space-x-0 justify-center md:items-start w-full px-2 pl-8 sm:pl-6 md:pl-12 py-6">
          <p
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-once="true"
            className="text-2xl dark:text-zinc-200 "
          >
            Expand Beyond..
          </p>
          <div className="py-3 -space-y-24 text-5xl md:text-7xl lg:text-8xl font-bold">
            {" "}
            <h2
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="90"
              data-aos-once="true"
              className="text-[#9f38ff]"
            >
              Queria
            </h2>
            <br />
            <h2
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="90"
              data-aos-once="true"
              className="pl-14 pt-12 md:pt-4 lg:pt-2 text-[#1b0f8a] dark:text-[#5768ff]"
            >
              {" "}
              Services
            </h2>
          </div>
          <p
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="120"
            data-aos-once="true"
            className="text-2xl dark:text-zinc-200"
          >
            Everything for Your Brand
          </p>
          <a className="w-3/4" href="/#platforms">
            <button
              type="button"
              className="py-3 px-6 sm:w-[50%] my-4 md:w-[70%] lg:w-[50%] md:mb-16 text-purple-500 hover:text-white text-xl hover:bg-gradient-to-r from-[#ae04f5] to-[#6763ff] border border-purple-500 bg-transparent duration-300 ease-linear rounded-md"
            >
              Explore Now
            </button>
          </a>
        </div>
        <div>
          <img className="w-full xl:mb-8 opacity-0 sm:opacity-100" src={bgLand} alt="/" />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] lg:min-w-[1000px]
                mx-1  md:left-1/2 transform md:-translate-x-1/2 min-w-[310px] bg-zinc-200 dark:bg-slate-900 border border-slate-300
                 rounded-xl text-center shadow-xl"
        >
          <p className="mb-4 uppercase text-gray-800 dark:text-slate-200 font-semibold">
            Top Priorities
          </p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500 dark:text-slate-300">
              <PaperAirplaneIcon className="h-6 pr-1 text-[#6763ff]" /> Strong
              Communication -&gt;
            </p>
            <p className="flex px-4 py-2 text-slate-500 dark:text-slate-300">
              <DesktopComputerIcon className="h-6 pr-1 text-[#6763ff]" />
              Product Management -&gt;
            </p>
            <p className="flex px-4 py-2 text-slate-500 dark:text-slate-300">
              <PresentationChartBarIcon className="h-6 pr-1 text-[#6763ff]" />
              Quality Assurance -&gt;
            </p>
            <p className="flex px-4 py-2 text-slate-500 dark:text-slate-300">
              <UsersIcon className="h-6 pr-1 text-[#6763ff]" />
              Client Satisfaction !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

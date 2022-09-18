import React from "react";
import readyImg from "../assets/ready.png";

const SCTA = () => {
  return (
    <div className="w-full bg-zinc-100 dark:bg-slate-900 transition-all duration-300 py-20">
      <div className="w-full py-8 bg-gradient-to-r to-[#ae04f5] from-[#6763ff] text-center drop-shadow-xl shadow-xl sha">
        <div className="w-full">
          <h2
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="40"
            data-aos-once="true"
            className="text-3xl md:text-4xl xl:text-5xl font-medium italic text-white"
          >
            Ready for Business?!
          </h2>
          <img
            className="mx-auto -z-10 -mb-28 object-cover w-96 mix-blend-overlay"
            src={readyImg}
            alt="/"
          />
          <a href="/form">
            <button
              // data-aos="fade-up"
              // data-aos-offset="200"
              // data-aos-delay="20"
              // data-aos-once="true"
              className="text-4xl mt-[6rem] md:text-5xl hover:tracking-wide duration-300	 bg-gradient-to-r from-[#ae04f5] to-[#6763ff] hover:outline-2 outline-offset-0 outline-[#6763ff] text-white xl:text-6xl border  px-4 py-4 rounded-xl"
            >
              Start Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SCTA;

import React from "react";

const SAbout = (props) => {
  return (
    <div name="about" className="bg-zinc-100 dark:bg-slate-900 py-24 w-full">
      <div className="py-24 px-4 w-full flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-8 xl:space-x-16 transition-all duration-300 bg-gradient-to-r to-[#ae04f5] from-[#6763ff] ">
        <div className="text-center max-w-3xl ">
          <h2
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-once="true"
            className="text-3xl md:text-4xl lg:text-5xl font-medium py-2 text-white"
          >
            What is <span className="underline">{props.nameA}</span>?
          </h2>
          <hr className="w-[60%] my-3 mx-auto" />
          <h5
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="80"
            data-aos-once="true"
            className="text-lg md:text-xl lg:text-2xl font-normal py-1 text-white"
          >
            {props.descA}
          </h5>
        </div>
        <img
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="40"
          data-aos-once="true"
          src={props.imgA}
          alt={props.nameA}
          className="object-cover w-full md:w-2/4 lg:w-2/4 xl:w-2/5 drop-shadow-xl rounded-full mix-blend-luminosity"
        />
      </div>
    </div>
  );
};

export default SAbout;

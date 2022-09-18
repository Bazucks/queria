import React from "react";

const SBenefits = (props) => {
  return (
    <div className="w-full bg-zinc-100 dark:bg-slate-900 transition-all duration-300 py-24">
      <div className="w-full">
        <ul className="grid mx-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          <li
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-once="true"
            className="m-4"
          >
            <div className="flex flex-col bg-violet-400 dark:bg-violet-500 rounded-lg">
              <img
                className="object-cover brightness-75 sepia-[40%] outline-white outline-double hover:filter-none duration-[400ms] transition-all rounded-xl p-4 shadow-xl"
                src={props.bImg1}
                alt={props.bName1}
              />
              <div className="text-center py-2 px-3">
                <h2 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-medium text-white">
                  {props.bTitle1}
                </h2>
                <p className="text-sm sm:text-md md:text-lg xl:text-xl font-normal italic text-white">
                  {props.bDesc1}
                </p>
              </div>
            </div>
          </li>
          <li
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="80"
            data-aos-once="true"
            className="m-4 lg:mt-14"
          >
            <div className="flex flex-col bg-violet-400 dark:bg-violet-500 rounded-lg">
              <img
                className="object-cover brightness-75 sepia-[40%] outline-white outline-double hover:filter-none duration-[400ms] transition-all rounded-xl p-4 shadow-xl"
                src={props.bImg2}
                alt={props.bName2}
              />
              <div className="text-center py-2 px-3">
                <h2 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-medium text-white">
                  {props.bTitle2}
                </h2>
                <p className="text-sm sm:text-md md:text-lg xl:text-xl font-normal italic text-white">
                  {props.bDesc2}
                </p>
              </div>
            </div>
          </li>
          <li
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="110"
            data-aos-once="true"
            className="m-4"
          >
            <div className="flex flex-col bg-violet-400 dark:bg-violet-500 rounded-lg">
              <img
                className="object-cover brightness-75 sepia-[40%] outline-white outline-double hover:filter-none duration-[400ms] transition-all rounded-xl p-4 shadow-xl"
                src={props.bImg3}
                alt={props.bName3}
              />
              <div className="text-center py-2 px-3">
                <h2 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-medium text-white">
                  {props.bTitle3}
                </h2>
                <p className="text-sm sm:text-md md:text-lg xl:text-xl font-normal italic text-white">
                  {props.bDesc3}
                </p>
              </div>
            </div>
          </li>
          <li
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="160"
            data-aos-once="true"
            className="m-4 lg:mt-14"
          >
            <div className="text-center lg:text-right mr-6">
              <h2 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-medium text-slate-700 dark:text-slate-200">
                {props.bDesc4}
              </h2>
              <a href="/form" target="_blank">
                <button
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="60"
                  data-aos-once="true"
                  className="my-4 text-lg sm:text-xl md:text-2xl xl:text-3xl font-medium text-slate-700 dark:text-slate-300 py-2 px-3 rounded-lg border-2 border-slate-700 hover:border-separate italic dark:hover:text-[#fff] ease-linear hover:tracking-wide hover:bg-gradient-to-r from-[#ae04f5] to-[#6763ff] duration-300 transition-all"
                >
                  {props.bButton}
                </button>
              </a>
            </div>
          </li>
        </ul>
        <p
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="20"
          data-aos-once="true"
          className="text-sm sm:text-md md:text-lg xl:text-xl px-12 font-normal text-center italic dark:text-white"
        >
          {props.pricing}
        </p>
      </div>
    </div>
  );
};

export default SBenefits;

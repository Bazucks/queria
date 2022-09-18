import React from "react";
import { SExpMock } from "./SExpMock";
import SExpProps from "./SExpProps";

const SExpertise = () => {
  return (
    <div className="w-full py-20 bg-slate-200 dark:bg-slate-900">
      <h1
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="20"
        data-aos-once="true"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center text-slate-900 dark:text-slate-200 py-4 mb-20 shadow-lg"
      >
        With Ensured Flexibility
      </h1>
      <div className="h-[250px] m-auto w-[90%] relative grid overflow-x-hidden place-items-center overflow-hidden bg-blend-luminosity">
        <div className="flex w-[5400px]">
          {" "}
          {/* width = slide width [250px] * 18[number of slides] */}
          <ul
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-delay="40"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className="flex w-[5400px] space-x-3 animate-wiggle select-none"
          >
            {SExpMock.map((item, index) => {
              return (
                <li
                  data-aos="fade-up"
                  data-aos-delay="30"
                  data-aos-duration="400"
                  key={index}
                >
                  <SExpProps img={item.img} alt={item.alt} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SExpertise;

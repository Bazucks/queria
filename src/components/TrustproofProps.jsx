import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const TrustproofProps = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const random = Math.floor(Math.random() * 10);
  let state = random % 2 !== 0 ? true : false;
  return (
    <div
      data-aos={state ? "fade-up" : "fade-down"}
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-once="true"
      className={
        state
          ? "py-2 px-4 w-[420px] h-[300px] rounded-md bg-cover my-6 border-2 border-violet-600 cursor-default hover:bg-gradient-to-r from-[#ae04f5] to-[#6763ff] duration-200 ease-linear"
          : "py-2 px-4 w-[420px] h-[300px] rounded-md bg-cover my-6 border-2 cursor-default border-pink-600 hover:bg-gradient-to-r from-[#ae04f5] to-[#6763ff] duration-300"
      }
      // style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className="relative top-[40%] text-center text-slate-700 dark:text-white">
        <h5 className="italic text-lg">{props.desc}</h5>
        <h3 className="text-2xl font-semibold">
          <span className="text-green text-2xl pr-1">~</span>
          {props.name}
        </h3>
      </div>
    </div>
  );
};

export default TrustproofProps;

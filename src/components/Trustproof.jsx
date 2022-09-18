import React, { useEffect } from "react";
import TrustproofProps from "./TrustproofProps";
import { tpData } from "./TrustProofData";
import Aos from "aos";
import "aos/dist/aos.css";

const Trustproof = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
//   const random = Math.floor(Math.random() * 10);
// //   const state = random % 2 !== 0 ? true : false;

  return (
    <div
      name="community"
      className="w-full bg-slate-200 dark:bg-slate-900 py-20 items-center"
    >
      <div className="flex items-center justify-center">
        <svg
          width="90"
          height="80"
          viewBox="0 0 90 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 9.65482V53.7941C0 59.1244 4.38257 63.4489 9.79327 63.4489H53.913L69.4168 80V63.4474H79.7398C85.1475 63.4474 89.5331 59.123 89.5331 53.7926V9.65482C89.5316 4.32296 85.1475 0 79.7398 0H9.79327C4.38257 0 0 4.32296 0 9.65482ZM62.3647 31.723C62.3647 28.2963 65.182 25.517 68.6603 25.517C72.1386 25.517 74.9559 28.2963 74.9559 31.723C74.9559 35.1526 72.1386 37.9304 68.6603 37.9304C65.182 37.9304 62.3647 35.1541 62.3647 31.723ZM38.4702 31.723C38.4702 28.2963 41.2905 25.517 44.7658 25.517C48.2411 25.517 51.0614 28.2963 51.0614 31.723C51.0614 35.1526 48.2411 37.9304 44.7658 37.9304C41.2905 37.9304 38.4702 35.1541 38.4702 31.723ZM14.5772 31.723C14.5772 28.2963 17.3975 25.517 20.8728 25.517C24.3511 25.517 27.1684 28.2963 27.1684 31.723C27.1684 35.1526 24.3511 37.9304 20.8728 37.9304C17.396 37.9319 14.5772 35.1541 14.5772 31.723Z"
            fill="#131316"
            fillOpacity="0.05"
          />
        </svg>
        <h1
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-once="true"
          className="text-slate-900 dark:text-slate-100 text-[1.7rem] sm:text-3xl md:text-4xl lg:text-6xl font-bold relative right-6"
        >
          What Clients Say{" "}
          <span className="dark:text-violet-500 text-violet-800 text-10xl -ml-1">
            :
          </span>
        </h1>
      </div>
      <div className="w-full items-center justify-center px-2 py-8 overflow-x-hidden flex flex-col md:flex-row md:space-x-16 cursor-text">
        {tpData.map((item, index) => (
            <TrustproofProps
              desc={item.desc}
              name={item.author}
              img={item.image}
              key={index}
            />
        ))}
      </div>
    </div>
  );
};

export default Trustproof;

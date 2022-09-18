import React from "react";
import PerksItem from "./PerksItem";
import { PerksData } from "./PerksData";

const Perks = () => {
  return (
    <div className="w-full bg-zinc-200 dark:bg-slate-900 transition-all duration-300 py-24">
      <h1 className=" text-zinc-800 dark:text-slate-200 uppercase text-3xl md:text4xl xl:text-5xl text-center font-semibold">
        Software Expertised{" "}
      </h1>
      <div className="flex flex-col md:flex-row  space-x-12 space-y-4 mt-20 justify-center">
        <ul className="flex sm:space-x-10 lg:space-x-14 xl:space-x-20">
          {PerksData.map((i, index) => {
            return (
              <li key={index}>
                <PerksItem img={i.img} name={i.name}  />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Perks;

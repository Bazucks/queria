import React from "react";
// import { CheckIcon } from '@heroicons/react/outline'
import { ProductsArr } from "./ProductsData";
import Products from "./Products";

const AllInOne = () => {
  return (
    <div
      id="platforms"
      name="services"
      className="w-full overflow-y-hidden py-20 bg-zinc-200 dark:bg-slate-900 transition-all duration-300"
    >
      <div className="px-2">
        <h2
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="30"
          data-aos-once="true"
          className="text-5xl font-bold text-center dark:text-blue-300"
        >
          Just Pick Your Service
        </h2>
        <p
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="90"
          data-aos-once="true"
          className="text-2xl py-8 text-gray-500 dark:text-slate-300 text-center font-medium italic"
        >
          All you need for building trust and lasting relationships within your
          auditory.
        </p>

        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="90"
          data-aos-once="true"
          className="w-full grid sm:grid-cols-2 lg:grid-cols-3 pt-4 gap-4"
        >
          {ProductsArr.map((item, index) => {
            return (
              <Products
                key={index}
                name={item.name}
                img={item.img}
                path={item.path}
                availability={item.availability}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllInOne;

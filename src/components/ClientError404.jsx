import React from "react";
import mainImg from "../assets/error.png";

const ClientError404 = () => {
  return (
    <div className="w-full h-full relative pb-6 bg-slate-100 dark:bg-slate-900 items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center px-2">
        <div className="py-28 items-center md:items-start px-2 flex flex-col space-y-3 ">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-violet-600">
            404 Not Found...{" "}
          </h1>
          <h5 className="text-md md:text-lg lg:text-xl xl:text-2xl font-medium italic text-slate-700 dark:text-white ml-2">
            Sorry, the page you're looking for doesn't exist!
          </h5>
          <a href="/">
            <button className="text-xl my-4 sm:mx-3 md:text-2xl lg:text-3xl xl:text-4xl font-medium text-violet-600 text-left border border-violet-600 py-3 px-4 rounded-lg hover:text-slate-100 dark:hover:text-slate-900 hover:bg-violet-600 duration-200 transition ease-in-out">
              Go Back
            </button>
          </a>
        </div>
        <div className="w-5/6 md:w-2/4 md:max-w-4xl">
        <img src={mainImg} alt="NotFoundImg" className="object-fit" />
        </div>
      </div>
    </div>
  );
};

export default ClientError404;

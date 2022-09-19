import React, { useEffect } from "react";
import formImg from "../assets/formImg.png";
import Aos from "aos";
import "aos/dist/aos.css";

const FormComp = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const title = "Submission Form";
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="w-full bg-zinc-200 dark:bg-slate-900 relative">
      <div className="flex flex-col md:flex-row w-full py-28 md:py-40 xl:py-20 items-center justify-evenly">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="30"
          data-aos-once="true"
          className="w-2/6 md:w-2/4 md:max-w-2xl"
        >
          <img className="object-cover" src={formImg} alt="FormImage" />
        </div>
        <div className="text-center py-8 max-w-[310px] ssm:max-w-[370px] msm:max-w-none px-2 dark:text-slate-200 space-y-4">
          <h2
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-once="true"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium"
          >
            Submission Form
          </h2>
          <h6
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-once="true"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal pb-4 text-slate-700 dark:text-slate-300 italic"
          >
            We are here to help you solve any inquiries!
          </h6>
          <div className="w-11/12 h-fit mx-auto py-2 px-2 bg-gradient-to-r from-[#ae04f5] to-[#6763ff] xl:w-[40rem] rounded-xl">
            <form
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="40"
              data-aos-once="true"
              className="px-4 py-6 text-center space-y-8 flex flex-col text-black"
              action="https://getform.io/f/8367ce54-790b-4ad2-a6e4-61ce2cfcf8a7"
              method="POST"
              encType="multipart/form-data"
            >
              <p className="text-lg py-1 px-3 text-slate-100 text-center font-medium italic">
                Use this Form when you want to make any orders or even if you're
                just struggling with something. Feel Free to ask anything...{" "}
              </p>
              <input
                required
                name="email"
                type="email"
                placeholder="Email *"
                className=" bg-slate-100 w-7/8 h-10 rounded-2xl placeholder:text-2xl placeholder:p-4 placeholder:text-left"
                autoComplete="on"
              />
              <input
                required
                name="name"
                type="name"
                placeholder="Name * "
                className=" bg-slate-100 w-7/8 h-10 rounded-2xl placeholder:text-2xl placeholder:p-4"
              />
              <select
                className=" bg-slate-100 rounded-lg text-slate-500 tracking-wide italic font-medium"
                name="select"
                id="selection"
              >
                <option className="bg-slate-500/20" value="">
                  What are you looking For:
                </option>
                <option value="SMAd">Social Media Marketing</option>
                <option value="SEO">Search Engine Optimization (SEO)</option>
                <option value="SMM">Social Media Management</option>
                <option value="Copy">Copywriting</option>
                <option value="GD">Graphic Design</option>
                <option className="bg-slate-400/40" value="Other">
                  Other/Question
                </option>
              </select>
              <textarea
                required
                className=" bg-slate-100 rounded-lg placeholder:text-xl p-1"
                placeholder="Enter description here... *"
                name="description"
                id="desc"
                cols="30"
                rows="10"
              ></textarea>
              <div className="flex py-4 justify-between">
                <input
                  type="file"
                  name="file"
                  className="rounded-lg bg-transparent text-white font-medium w-60 transition-all duration-200 "
                />
                <p className="text-white text-lg space-x-3 italic font-medium">
                  We Accept Queria's
                  <a
                    target="_blank"
                    className="mx-1 italic text-blue-200 hover:text-blue-300 hover:no-underline duration-300 transition-all underline"
                    href="/tos"
                  >
                    Terms of Service
                  </a>
                  <input checked type="checkbox" required />
                </p>
              </div>
              <button
                className="border border-white py-3 rounded-xl text-xl md:text-2xl lg:text-3xl hover:tracking-wider transition-all hover:text-violet-700 text-white hover:bg-white duration-300 "
                type="submit"
              >
                SUBMIT
              </button>
              <p className="text-lg py-1 px-3 text-slate-100 text-center font-medium italic">
                Getting a response typically takes up to 24hrs. If you don't
                feel like waiting, make sure to check our{" "}
                <a className="text-blue-200 hover:underline" target="_blank" href="/faq">
                  FAQ
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComp;

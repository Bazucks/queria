import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import supportImg from "../assets/support1.png";

const Support = () => {
  return (
    <div
      name="support"
      id="support"
      className="w-full py-16 bg-zinc-200 dark:bg-slate-900 transition-all duration-300"
    >
      <div className="w-full h-[700px] bg-gradient-to-r  from-[#6763ff]/90 to-[#ae04f5]/70 absolute">
        <img
          className="mx-auto md:mx-0 h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="60"
            data-aos-once="true"
            className="text-3xl pt-8 text-slate-300 uppercase text-center "
          >
            Our services provide{" "}
          </h2>
          <h3
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="80"
            data-aos-once="true"
            className="text-5xl font-bold py-6 text-center text-slate-100"
          >
            Long-Term Opportunity
          </h3>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-once="true"
            className="py-4 text-center text-3xl text-slate-200"
          >
            You might be wondering <span>what are the Benefits of this..</span>!
          </p>
          {/* <br /> */}
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-once="true"
            className="pb-4 block md:hidden text-center text-xl ssm:text-2xl sm:text-3xl text-slate-200"
          >
            Well, sometimes managing your product(or content) may get really
            complicated, especially if you're doing it by your own. That's why
            our Team is always by your side on minimizing complexity, while
            simoultaneousely increasing your business ratings as follows:{" "}
          </p>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-once="true"
            className="pb-4 text-center hidden md:block text-3xl text-slate-200"
          >
            Well, sometimes managing your product(or content) may get really
            complicated, especially if you're doing it by your own. On top of
            that, it takes you not only the financial expence, but also a
            person's biggest asset -{" "}
            <span className="font-semibold italic">time</span>. That's why our
            Team is always by your side on minimizing complexity, while
            potentially increasing your business rating at the same time!{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-delay="90"
            data-aos-once="true"
            className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl"
          >
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-gradient-to-b  from-[#6763ff] to-[#ae04f5]/90 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6 dark:text-white">
                Audience Growth
              </h3>
              <p className="text-slate-600 dark:text-slate-200 text-xl">
                By assembling all the working approaches to{" "}
                <span className="text-violet-800 dark:text-violet-300 font-medium">
                  advance
                </span>{" "}
                your content, this'll help you carry a better-targeted audience,
                leading to enhanced{" "}
                <strong className="text-violet-800 dark:text-violet-300 font-medium">
                  impressions
                </strong>{" "}
                .
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 pl-8 py-4">
              <a href="/form" target="_blank">
                <p className="flex items-center text-indigo-600 dark:text-indigo-200 italic">
                  Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </a>
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-once="true"
            className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl"
          >
            <div className="p-8">
              <SupportIcon className="w-16 p-4 bg-gradient-to-b  from-[#6763ff] to-[#ae04f5]/90 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6 dark:text-white">
                Sales Increase
              </h3>
              <p className="text-slate-600 dark:text-slate-200 text-xl">
                The <span>empowered</span> popularization of the product/content
                would in turn <span>attract</span>{" "}
                <span className="text-violet-800 dark:text-violet-300 font-medium">
                  more
                </span>{" "}
                potential customers, which is going to bring your business{" "}
                <span className="text-violet-800 dark:text-violet-300 font-medium">
                  better
                </span>{" "}
                revenue!
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 pl-8 py-4">
              <a href="/form" target="_blank">
                <p className="flex items-center text-indigo-600 dark:text-indigo-200 italic">
                  Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </a>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="300"
            data-aos-once="true"
            className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl"
          >
            <div className="p-8">
              <ChipIcon className="w-16 p-4 bg-gradient-to-b  from-[#6763ff] to-[#ae04f5]/90 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6 dark:text-white">
                Greater Rates
              </h3>
              <p className="text-slate-600 dark:text-slate-200 text-xl">
                Conversion Rate is essential when it comes to the future of a
                brand. That's why{" "}
                <span className="text-violet-800 dark:text-violet-300 font-medium">
                  establishing
                </span>{" "}
                the proper User Experience is a key fragment for gathering those{" "}
                <span className="text-violet-800 dark:text-violet-300 font-medium">
                  5-stars!
                </span>
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 pl-8 py-4">
              <a href="/form" target="_blank">
                <p className="flex items-center text-indigo-600 dark:text-indigo-200 italic">
                  Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

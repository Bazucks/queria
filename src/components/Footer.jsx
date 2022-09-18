import React from "react";
import {
  // FaFacebook,
  // FaGithub,
  FaInstagram,
  // FaTwitter,
  // FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      name="footer"
      id="footer"
      className="w-full pt-24 bg-slate-800 text-gray-300 py-8 px-2"
    >
      <div className="max-width-[1240px] mx-auto md:pl-24  grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 ">
        <div>
          <h6 className="font-bold uppercase pt-2">Products</h6>
          <ul>
            <a
              href="/sm-advertising"
              className="hover:text-violet-200 hover:underline duration-150"
            >
              <li className="py-1">Social Media Marketing</li>
            </a>
            <a
              href="/sm-management"
              className="hover:text-violet-200 hover:underline duration-150"
            >
              <li className="py-1">Social Media Management</li>
            </a>
            <a
              href="/graphic-design"
              className="hover:text-violet-200 hover:underline duration-150"
            >
              <li className="py-1">Graphic Design</li>
            </a>
            <a
              href="/seo"
              className="hover:text-violet-200 hover:underline duration-150"
            >
              <li className="py-1">Search Engine Optimization</li>
            </a>
            <a
              href="/copywriting"
              className="hover:text-violet-200 hover:underline duration-150"
            >
              <li className="py-1">Copywriting</li>
            </a>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <a
              href="/faq"
              className="hover:text-violet-200 hover:underline duration-150"
            >
              <li className="py-1">Frequently Asked Questions</li>
            </a>
            <a
              target="_blank"
              href="/form"
              className="hover:text-violet-200 hover:underline duration-150"
            >
              <li className="py-1">Form</li>
            </a>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <a
              href="/#about"
              className="hover:text-violet-200 hover:underline duration-150"
            >
              <li className="py-1">About</li>
            </a>
            <a
              href="/"
              className="hover:text-violet-200 hover:underline duration-150"
            >
              <li className="py-1">Partners</li>
            </a>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <a
              href="/tos"
              className="hover:text-violet-200 hover:underline duration-150"
            >
              <li className="py-1">Terms of Use</li>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.pexels.com"
              className="hover:text-violet-200 hover:underline duration-150"
            >
              <li className="py-1">Credits</li>
            </a>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase lg:text-2xl">
            Have a Question? Let Us know..
          </p>
          <p className="py-2 font-medium ml-3 mt-2">
            - Via Email:{" "}
            <span className="italic pl-4 lg:text-lg">
              {" "}
              queria.services@gmail.com
            </span>
          </p>
          <p className="py-2 font-medium ml-3">
            - Using Our Form --&gt;{" "}
            <a
              target="_blank"
              href="/form"
              className="pl-2 text-violet-500 underline hover:text-violet-400 duration-150"
            >
              here
            </a>
          </p>
          <p className="py-4 lg:text-lg">
            We look forward to hearing from you!
          </p>
        </div>
      </div>
      <div className="flex max-w-[1240px] px-2  pt-3 mx-auto justify-around sm:flex-row text-center text-gray-500">
        <p className="py-4">Queria&copy;, 2022. All rights reserved</p>
        <div className="flex space-x-4 sm:w-[300px] pt-4 text-2xl">
          {/* <FaFacebook /> */}
          <h4>Our Socials:</h4>
          <a
            href="https://www.instagram.com/cvetanov_store/"
            target={"_blank"}
            rel="noreferrer"
          >
            {" "}
            <FaInstagram
              size={40}
              className=" duration-150 ease-linear hover:text-violet-400"
            />
          </a>
          {/* <FaTwitter />
                    <FaTwitch />
                    <FaGithub /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

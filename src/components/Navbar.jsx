import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import navLogo from "../assets/queriabasefull.png";
import useDarkTheme from "../hooks/useDarkTheme";

const Navbar = () => {
  // // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  // if (
  //   localStorage.theme === "dark" ||
  //   (!("theme" in localStorage) &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches)
  // ) {
  //   document.documentElement.classList.add("dark");
  // } else {
  //   document.documentElement.classList.remove("dark");
  // }

  // // Whenever the user explicitly chooses light mode
  // localStorage.theme = "light";

  // // Whenever the user explicitly chooses dark mode
  // localStorage.theme = "dark";

  // // Whenever the user explicitly chooses to respect the OS preference
  // // localStorage.removeItem("theme");

  // const handleTheme = () => {
  //   const loc = localStorage.theme;
  //   loc === "dark"
  //     ? document.documentElement.classList.remove("dark")
  //     : document.documentElement.classList.add("dark");
  // };

  const [mode, setTheme] = useDarkTheme();

  // const [light, setLight] = useState(false);
  // const handleLight = () => setLight(!light);
  // let bgNav;
  // if (!light) {
  //   bgNav = "rgb(240, 240, 240)";
  // } else {
  //   bgNav = "#17171b";
  // }
  // let textNav;
  // if (!light) {
  //   textNav = "#111";
  // } else {
  //   textNav = "#fff";
  // }

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div
      className={
        mode === "dark"
          ? "w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg duration-300 ease-linear transition-all"
          : "w-screen h-[80px] z-10 bg-slate-800 fixed drop-shadow-lg duration-300 ease-linear transition-all"
      }
    >
      <div className="px-2 md:ml-[-3rem] lg:ml-0 md:space-x-5 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <a href="/">
            <img src={navLogo} className="w-[140px] mr-12 ml-14" alt="HeroBG" />
          </a>
          <ul className="hidden md:flex space-x-10  ">
            <li className="hidden lg:block">
              <a
                className={
                  mode === "dark"
                    ? "text-black hover:text-[#6763ff]  duration-150 cursor-pointer"
                    : "hover:text-[#6763ff]  text-white duration-150 cursor-pointer"
                }
                href="/#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#about"
                className={
                  mode === "dark"
                    ? "text-black hover:text-[#6763ff]  duration-150 cursor-pointer"
                    : "hover:text-[#6763ff]  text-white duration-150 cursor-pointer"
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/#support"
                className={
                  mode === "dark"
                    ? "text-black hover:text-[#6763ff]  duration-150 cursor-pointer"
                    : "hover:text-[#6763ff]  text-white duration-150 cursor-pointer"
                }
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href="/#platforms"
                className={
                  mode === "dark"
                    ? "text-black hover:text-[#6763ff]  duration-150 cursor-pointer"
                    : "hover:text-[#6763ff]  text-white duration-150 cursor-pointer"
                }
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className={
                  mode === "dark"
                    ? "text-black hover:text-[#6763ff]  duration-150 cursor-pointer"
                    : "hover:text-[#6763ff]  text-white duration-150 cursor-pointer"
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 space-x-4">
          <button
            onClick={() => setTheme(mode)}
            className={`border-none bg-transparent hover:text-[#6763ff] text-black mr-4`}
          >
            {mode === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="hover:text-black w-6 h-6 text-[#6763ff]  duration-200"
                // style={{ color: `${textNav}` }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="hover:text-white text-[#6763ff] w-6 h-6  duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </button>
          <a className="w-full" href="/form">
            <button className="px-8 py-3 border-[1px] hover:border-transparent rounded-lg text-[#6763ff] hover:text-white font-medium border-[#6763ff] hover:bg-gradient-to-r from-[#ae04f5] to-[#6763ff] duration-200 ease-linear">
              Get Started
            </button>
          </a>
        </div>
        <div
          className={
            mode === "dark"
              ? `md:hidden mr-4 cursor-pointer text-black hover:text-[#6763ff] hover:rotate-90 duration-300 `
              : `md:hidden mr-4 cursor-pointer text-white hover:text-[#6763ff] hover:rotate-90 duration-300 `
          }
          onClick={handleClick}
        >
          {!nav ? (
            <MenuIcon className="w-8 dark:text-white" />
          ) : (
            <XIcon className="w-8 dark:text-white" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "md:hidden absolute w-full h-[100vh] bg-zinc-100 dark:bg-slate-900 px-8 text-center text-2xl space-y-6 justify-center mx-auto"
        }
        // style={{ backgroundColor: `${bgNav}` }}
      >
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer  py-8">
          {" "}
          <a
            onClick={handleClose}
            className={
              mode === "dark"
                ? "text-black hover:text-[#6763ff] duration-150 cursor-pointer"
                : "text-white hover:text-[#6763ff] duration-150"
            }
            href="/#home"
          >
            Home
          </a>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer py-8">
          <a
            onClick={handleClose}
            className={
              mode === "dark"
                ? "text-black hover:text-[#6763ff] duration-150 cursor-pointer"
                : "text-white hover:text-[#6763ff] duration-150"
            }
            href="/#about"
          >
            About
          </a>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer py-8">
          {" "}
          <a
            onClick={handleClose}
            className={
              mode === "dark"
                ? "text-black hover:text-[#6763ff] duration-150 cursor-pointer"
                : "text-white hover:text-[#6763ff] duration-150"
            }
            href="/#benefits"
          >
            Benefits
          </a>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer py-8">
          {" "}
          <a
            onClick={handleClose}
            className={
              mode === "dark"
                ? "text-black hover:text-[#6763ff] duration-150 cursor-pointer"
                : "text-white hover:text-[#6763ff] duration-150"
            }
            href="/#platforms"
          >
            Services
          </a>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer py-8">
          <a href="/footer">
            {" "}
            <a
              onClick={handleClose}
              className={
                mode === "dark"
                  ? "text-black hover:text-[#6763ff] duration-150 cursor-pointer"
                  : "text-white hover:text-[#6763ff] duration-150"
              }
              href="#footer"
            >
              Contact
            </a>
          </a>
        </li>
        <div className="flex flex-col md:flex-row justify-center my-4 space-y-8">
          <button
            onClick={() => setTheme(mode)}
            className={`border-none  bg-transparent hover:text-[#6763ff] text-black mr-4`}
          >
            {mode === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-black w-6 h-6 mx-auto hover:text-[#6763ff]  duration-200"
                // style={{ color: `${textNav}` }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-white hover:text-[#6763ff] w-6 h-6 mx-auto duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </button>
          <a href="/form">
            {" "}
            <button
              className="px-8 py-3 border-[1px] border-slate-900 text-slate-900 dark:border-slate-200 rounded-lg font-medium dark:text-white hover:bg-gradient-to-r from-[#ae04f5] to-[#6763ff] duration-200 ease-linear"
              // style={{ color: `${textNav}`, borderColor: `${textNav}` }}
            >
              Get Started
            </button>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;

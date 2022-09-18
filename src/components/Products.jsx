import React from "react";

const Products = (props) => {
  return (
    <div className="text-center drop-shadow-xl max-w-[30rem] bg-gradient-to-r from-[#ae04f5] to-[#6763ff] rounded-lg flex flex-col py-3 px-2 mx-3 my-2">
      <div
        onMouseEnter={() => {
          const toggle = document.getElementById(`${props.name}`);
          const avail = document.getElementById(`${props.img}`);
          avail.classList.replace("relative", "hidden");
          toggle.classList.replace("hidden", "block");
          // console.log(toggle.className);
        }}
        onMouseLeave={() => {
          const toggle = document.getElementById(`${props.name}`);
          const avail = document.getElementById(`${props.img}`);
          avail.classList.replace("hidden", "relative");
          toggle.classList.replace("block", "hidden");
        }}
        className={`bg-cover cursor-pointer hover:grayscale hover: duration-300 ease-in-out max-w-[30rem] bg-blend-darken h-[34rem] bg-center bg-no-repeat rounded-xl `}
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <a href={props.path}>
          <h3
            id={`${props.name}`}
            className="hidden py-4 bg-gradient-to-r from-[#ae04f5] to-[#6763ff] mb-[-16rem] mt-[200px] text-5xl text-white uppercase font-medium"
          >
            More Info
          </h3>
        </a>

        {/* <img src={props.img} alt={props.name} /> */}
        <div
          id={`${props.img}`}
          className="text-lg md:text-xl lg:text-3xl xl:text-4xl font-noraml uppercase w-full bg-[#6763ff] text-white relative top-[86%] h-[10%] text-center"
        >
          {props.availability}
        </div>
      </div>
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium pt-4 pb-2 text-[#f4f3ff]">
        {props.name}
      </h2>
    </div>
  );
};

export default Products;

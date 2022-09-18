import React from "react";

const SExpProps = (props) => {
  return (
    <div className="h-[200px] w-[300px] flex items-center p-[15px] hover:invert transition-all duration-[400ms]">
      <img title={props.alt} src={props.img} alt={props.alt} className="w-full rounded-full" />
    </div>
  );
};

export default SExpProps;

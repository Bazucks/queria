import React from "react";

const PerksItem = (props) => {
  return (
    <div className="justify-center px-4 py-2 bg-slate-500/80 rounded-lg">
      <img className="object-fit justify-center mx-auto w-48" src={props.img} alt={props.name} />
    </div>
  );
};

export default PerksItem;

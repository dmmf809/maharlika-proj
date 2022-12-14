import React from "react";

const AppButton = (props) => {
  return (
    <div className="md:w-28 bg-yellow-200 p-2 px-3 rounded w-[26rem] text-zinc-900">
      <p className="text-center">{props.text}</p>
    </div>
  );
};

export default AppButton;

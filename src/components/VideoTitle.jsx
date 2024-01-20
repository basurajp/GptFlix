import React from "react";

const VideoTitle = ({title,overview,id}) => {
  return (
    <div className="">
      <div className="w-[90%] lg:h-3/4   flex flex-col justify-center gap-2 pl-4  pb-2 pt-1 ">
        <h1 className="text-2xl lg:text-6xl font-bold  w-60   lg:w-[70%] overflow-hidden">{title}</h1>
        <p className="w-[60%]  text-xs lg:text-lg  lg:w-1/4 h-12 lg:h-28 overflow-hidden">
         {overview}
        </p>
        <div className="btns pt-2 lg:pt-4 ">
          <button className="px-4 py-1 lg:px-10 lg:py-3 bg-zinc-100 text-black font-semibold rounded-lg mr-2 lg:mr-4">
            Watch Now{" "}
          </button>
          <button className="px-4 py-1 lg:py-3 bg-zinc-100 text-black font-semibold rounded-lg ">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

import React from "react";

const VideoTitle = () => {
  return (
    <div className="w-full h-full absolute ">
      <div className="w-3/4 h-full  flex flex-col justify-center gap-4 pl-4 lg:pl-10 ">
        <h1 className="text-5xl lg:text-6xl font-bold">Shoorveer</h1>
        <p className="w-full text-sm lg:text-lg leading-none lg:w-3/4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
          veritatis ratione deserunt nihil iste aperiam alias a veniam? Eaque,
          error?
        </p>
        <div className="btns">
          <button className="px-4 py-2 lg:px-10 lg:py-3 bg-zinc-100 text-black font-semibold rounded-lg mr-2 lg:mr-4">
            Watch Now{" "}
          </button>
          <button className="px-6 py-3 bg-zinc-100 text-black font-semibold rounded-lg">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

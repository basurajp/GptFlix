import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlaingMovies";
import MainConatiner from "./MainConatiner";
import SecondarContainer from "./SecondarContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="w-full min-h-screen ">
      <div className="">
        <Header />
      </div>

      <div className="w-screen h-1/2 lg:h-[90%] relative">
        <MainConatiner />
      </div>

      <div className="">
        <SecondarContainer />
      </div>
    </div>
  );
};

export default Browse;

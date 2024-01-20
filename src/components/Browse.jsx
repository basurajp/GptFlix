import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlaingMovies";
import MainConatiner from "./MainConatiner";
import SecondarContainer from "./SecondarContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="w-screen min-h-screen ">
      <div className="h-full w-full ">
        <Header />
      </div>

      <div className="h-full w-full    ">
        <MainConatiner />
      </div>

      <div className="">
        <SecondarContainer />
      </div>
    </div>
  );
};

export default Browse;

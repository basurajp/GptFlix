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

      <div className="h-full w-full bg-zinc-200   ">
        <MainConatiner />
      </div>

      <div className="h-full w-full bg-red-500 mt-6 ">
        <SecondarContainer />
      </div>
    </div>
  );
};

export default Browse;

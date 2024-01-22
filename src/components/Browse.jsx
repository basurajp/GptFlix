import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlaingMovies";
import MainConatiner from "./MainConatiner";
import SecondarContainer from "./SecondarContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../utils/languagesConstant";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();

  return (
    <div className="w-screen min-h-screen lg:-mt-28 ">
      <div className="h-full w-full ">
        <Header />
      </div>




      {showGptSearch ? (
        <>
          <div className="">
            <GptSearch />
          </div>
        </>
      ) : (
        <>
          <div className="h-full w-full    ">
            <MainConatiner />
          </div>

          <div className="">
            <SecondarContainer />
          </div>
        </>
      )}
    </div>
  );
};

export default Browse;

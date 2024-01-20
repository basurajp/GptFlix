import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainConatiner = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const { title, overview, id } =
    movies[Math.floor(Math.random() * movies.length)];

  return (
    <div
      className=" w-full h-full relative
      "
    >
      <VideoBackground movieId={id} />
      <div className=" w-screen lg:h-screen absolute pt-12  pl-2 lg:pt-60   top-0 text-white bg-gradient-to-r from-black ">
        <VideoTitle title={title} overview={overview} id={id} />
      </div>
    </div>
  );
};

export default MainConatiner;

import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondarContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  return (
    <div className=" bg-black lg:mt-28 lg:pl-8  pl-5 lg:mr-0 -mt-3 ">
      <MovieList title={"Now Playing "} movies={movies} />
      <MovieList title={"Popular "} movies={movies} />
      <MovieList title={"Top Rated "} movies={movies} />
      <MovieList title={"Upcoming "} movies={movies} />
    </div>
  );
};

export default SecondarContainer;

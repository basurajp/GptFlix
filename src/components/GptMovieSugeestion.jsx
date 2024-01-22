import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSugeestion = () => {
  const { retroMoviesName, tmdbSearchResult } = useSelector(
    (store) => store.gpt
  );
  if (!retroMoviesName) return;

  return (
    <div className="px-4 py-2  bg-opacity-90 text-white bg-black mt-4">
      {retroMoviesName.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={tmdbSearchResult[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSugeestion;

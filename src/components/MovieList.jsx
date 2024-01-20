import React from "react";
import MovieLCard from "./MovieLCard";

const MovieList = ({ title, movies }) => {
  return movies && (
    <div className="">
      <h1 className="text-white lg:text-2xl font-semibold py-2">{title}</h1>
      <div className="flex  overflow-x-scroll">
        <div className="flex lg:gap-2 gap-2 ">
          {
            movies?.map((movie,index)=><MovieLCard key={movie.id} movie={movie}/>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default MovieList;

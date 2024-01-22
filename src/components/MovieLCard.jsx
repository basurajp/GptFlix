import React from "react";

const MovieLCard = ({movie}) => {
  
  return movie.poster_path && (
    <div className="lg:w-48 w-36  ">
      <img className="pb-3   "
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt="movieCard"
      />
    </div>
  );
};

export default MovieLCard;

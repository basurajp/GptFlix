import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.tarilerVideo);


  useMovieTrailer(movieId)

  return trailerVideo &&  (
    <div className=" w-screen  h-52 lg:h-[80vh]  ">
      <iframe
        className="w-screen lg:h-screen "
        title="YouTube Video"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
        allow="autoplay"
      />
    </div>
  );
};

export default VideoBackground;

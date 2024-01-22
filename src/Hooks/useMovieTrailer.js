import { API_OPTIONS } from "../utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/store/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const popularMoviesData = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getMovieData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos
      `,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.find(
      (elem, index) => (elem.type = "Trailer")
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !popularMoviesData && getMovieData();
  }, []);
};

export default useMovieTrailer;

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/store/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovieData();
  }, []);
};

export default useNowPlayingMovies;

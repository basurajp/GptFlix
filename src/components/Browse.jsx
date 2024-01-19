import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
    console.log(json.results);
  };

  useEffect(() => {
    getNowPlayingMovieData();
  }, []);

  return (
    <div className="">
      <Header />
    </div>
  );
};

export default Browse;

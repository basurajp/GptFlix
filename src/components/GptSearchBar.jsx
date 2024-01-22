import React, { useRef } from "react";
import { lang } from "../utils/languagesConstant";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { API_OPTIONS } from "../utils/contants";
import { addGptMovieresult } from "../utils/store/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const movieSearchResult = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // make an api call

    // const gpt_Query = `act as movie recommendation system and suggest some movies for this query ${searchText.current.value} only give me some movies . comma seperated like the example result given ahead . example result : gadar , sholay , Don , golmaal,koi mil gaya  `;
    // try {
    //   const chatResult = await openai.chat.completions.create({
    //     messages: [{ role: "user", content: gpt_Query }],
    //     model: "gpt-3.5-turbo",
    //   });

    //   console.log(chatResult.choices);
    // } catch (error) {
    //   console.error("Error in API call:", error);

    //   // Log specific error details for better debugging
    //   if (error.response) {
    //     console.error("Response data:", error.response.data);
    //   }
    // }

    const retroMovies = [
      "Sholay",
      "Mughal-e-Azam",
      "Amar Akbar Anthony",
      "Anand",
      "Kabhi Kabhie",
    ];

    // console.log(moviehSearcResult('Sholay'));
    const movieDataPromiseArray = retroMovies.map(
      (movie) => movieSearchResult(movie) // result will be arry of promises
    );

    const tmdbSearchResult = await Promise.all(movieDataPromiseArray);

    // console.log(tmdbSearchResult);

    dispatch(
      addGptMovieresult({
        retroMoviesName: retroMovies,
        tmdbSearchResult: tmdbSearchResult,
      })
    );
  };

  return (
    <div className="pt-[30%] lg:pt-[10%] lg:flex lg:items-start lg:justify-center ">
      <form
        className=" bg-black lg:w-1/2 rounded-lg bg-opacity-80  "
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          value={'retro Movies'}
          disabled 
          type="text "
          className="px-2 py-2 w-[70%] my-4 ml-4 mr-2 lg:ml-8 lg:mr-6 lg:py-3   rounded-lg bg-white  "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="submit"
          onClick={handleGptSearchClick}
          className="py-2 px-4 lg:px-8 lg:py-3 bg-red-600 text-white font-semibold rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

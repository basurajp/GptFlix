import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
  },
  reducers: {
    togleGptSearcView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieresult: (state, action) => {
      const {retroMoviesName,tmdbSearchResult}= action.payload
      state.retroMoviesName = retroMoviesName;
      state.tmdbSearchResult = tmdbSearchResult;
    },
  },
});

export const { togleGptSearcView ,addGptMovieresult} = gptSlice.actions;

export default gptSlice.reducer;

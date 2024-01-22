// store.js
import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./signSlice"; // Import the correct reducer
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const store = configureStore({
  reducer: {
    signIn: signInReducer,
    user: userReducer,
    movies: movieReducer,
    gpt: gptSlice,
    config : configSlice
  },
});

export default store;

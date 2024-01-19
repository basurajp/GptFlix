// store.js
import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./signSlice"; // Import the correct reducer
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const store = configureStore({
  reducer: {
    signIn: signInReducer,
    user: userReducer,
    movies: movieReducer,
  },
});

export default store;

// store.js
import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./signSlice"; // Import the correct reducer
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    signIn: signInReducer,
    user: userReducer,
  },
});

export default store;

// store.js
import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./signSlice";  // Import the correct reducer

const store = configureStore({
  reducer: {
    signIn: signInReducer,  
  },
});

export default store;

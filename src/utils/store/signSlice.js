import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    isSignIn: true,
  },
  reducers: {
    setSignIn: (state, action) => {
      state.isSignIn = action.payload;
    },
  },
});

export const { setSignIn } = signInSlice.actions;

export default signInSlice.reducer;

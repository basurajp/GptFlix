import React, { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  
} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

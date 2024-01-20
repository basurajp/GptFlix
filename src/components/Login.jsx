import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { setSignIn } from "../utils/store/signSlice";
import { useForm } from "react-hook-form";
import Sform from "./Sform";
import { BG_IMAGE } from "../utils/contants";

const Login = () => {
  const dispatch = useDispatch();
  const signInState = useSelector((store) => store.signIn.isSignIn);

  const changeSignInState = () => {
    dispatch(setSignIn(!signInState));
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formdata = (data) => {
    reset();
  };

  return (
    <div>
      <Header />
      <div className="w-full h-screen absolute">
        <img
          className="h-[100%] object-cover lg:w-full"
          src={BG_IMAGE}
          alt=""
        />
      </div>
      <Sform />
    </div>
  );
};

export default Login;

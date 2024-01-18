import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { setSignIn } from "../utils/store/signSlice";
import { useForm } from "react-hook-form";

const Sform = () => {
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
    console.log(data);
    reset();
  };

  return (
    <form
      className="wf bg-black absolute lg:w-3/12 lg:my-36 lg:right-0 lg:left-0 lg:bottom-[-100px]  lg:mx-auto lg:h-auto text-white bg-opacity-80  py-16 px-6 lg:py-5 w-full h-full"
      onSubmit={handleSubmit(formdata)}
    >
      <h1 className="text-2xl font-bold mb-6">
        {signInState ? "Sign In" : "Sign Up"}
      </h1>
      {!signInState && (
        <div className="mb-2">
          <input
            {...register("fullName", { required: "Full Name is required" })}
            type="text"
            placeholder="Full Name"
            className={`w-full px-2 py-3 rounded-md bg-gray-600 ${
              errors.fullName && "border-red-500"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 mt-1">{errors.fullName.message}</p>
          )}
        </div>
      )}

      <div className="mb-2">
        <input
          {...register("email", { required: "Email is required" })}
          type="text"
          placeholder="Email Address"
          className={`w-full px-2 py-3 rounded-md bg-gray-600 ${
            errors.email && "border-red-500"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-2">
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Password"
          className={`w-full px-2 py-3 rounded-md bg-gray-600 ${
            errors.password && "border-red-500"
          }`}
        />
        {errors.password && (
          <p className="text-red-500 mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full mt-3 px-2 py-3 bg-red-700 font-semibold  rounded-md"
      >
        {signInState ? "Sign in" : "Sign up"}
      </button>
      <p className="mt-4">
        {signInState ? "New to Netflix ?" : "Already a User"}
        <span
          className="font-semibold ml-2 cursor-pointer"
          onClick={changeSignInState}
        >
          {signInState ? " Sign up now." : "Sign In"}
        </span>
      </p>
    </form>
  );
};

export default Sform;

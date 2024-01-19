import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { setSignIn } from "../utils/store/signSlice";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Sform = () => {
  const dispatch = useDispatch();
  const signInState = useSelector((store) => store.signIn.isSignIn);
  const navigate = useNavigate()

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
    if (!signInState) {
      // sign up
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;



          updateProfile(user, {
            displayName:data.fullName, photoURL: "https://media.licdn.com/dms/image/D5603AQFPRJKXKaU8xw/profile-displayphoto-shrink_100_100/0/1701794854020?e=1710979200&v=beta&t=ylHL9nvnQJh8iOOOyY_CIt3H5vYL2X2sFIDxU_Ol9RI"
          }).then(() => {
            navigate('/browse')
            
          }).catch((error) => {
            // An error occurred
            // ...
          });
          
      
      
      


        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(error.message);

        });
    } else {
      // sign in logic

      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message);
        });
    }
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
          type="email"
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

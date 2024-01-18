import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { setSignIn } from "../utils/store/signSlice";
import { useForm } from "react-hook-form";
import Sform from "./Sform";

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
    console.log(data);
    reset();
  };

  return (
    <div>
      <Header />
      <div className="w-full h-screen absolute">
        <img
          className="h-[100%] object-cover lg:w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
<Sform />
     
    </div>
  );
};

export default Login;

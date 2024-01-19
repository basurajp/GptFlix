import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
 
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="absolute px-6 py-2 bg-gradient-to-b from-black z-10 w-full flex items-center justify-between">
      <img
        className="w-24 lg:w-44"
        src="https://i.ibb.co/fr41fWT/png-transparent-netflix-streaming-media-television-show-logo-netflix-television-text-trademark-thumb.png"
        alt="Tthis is an logo"
      />

      {user && (
        <div className="">
          <button
            onClick={handleSignOut}
            className="lg:px-4 lg:py-2 bg-red-600 px-2 py-1 text-sm text-white font-semibold rounded-lg  "
          >
            Sign Out
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default Header;

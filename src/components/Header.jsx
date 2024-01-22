import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import { NETFLIX_LOGO } from "../utils/contants";
import { togleGptSearcView } from "../utils/store/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/languagesConstant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const gptTogleData  = useSelector(store=>store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleGptSearchClick = () => {
    // toggle gpt search
    dispatch(togleGptSearcView(!gptTogleData));
  };

  


  return (
    <>
      <div className="absolute px-6 py-2 bg-gradient-to-b from-black z-10 w-full flex items-center justify-between">
        <img
          className="w-24 lg:w-44"
          src={NETFLIX_LOGO}
          alt="This is an logo"
        />

        <div className="">
          {user && (
            <div className="">
              <select className="py-2 mr-2 rounded-lg lg:px-2 bg-gray-900 text-white "  >
                {SUPPORTED_LANGUAGES.map((lan) => (
                  <option key={lan.identifer} value={lan.identifer}>
                    {lan.name}
                  </option>
                ))}
              </select>
              <button
                onClick={handleGptSearchClick}
                className="lg:px-4 lg:py-2 bg-purple-700 px-2 py-1 text-sm mr-2 text-white font-semibold rounded-lg  "
              >
                GPT search
              </button>
              <button
                onClick={handleSignOut}
                className="lg:px-4 lg:py-2 bg-red-600 px-2 py-1 text-sm text-white font-semibold rounded-lg  "
              >
                Sign Out
              </button>{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  let [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background-img"
        />
      </div>
      <div className="my-36 mx-auto p-16 rounded-lg w-3/12 bg-[rgba(0,0,0,0.8)] absolute left-1/3 top-0">
        <div className="text-white font-bold text-lg mb-8">
          {isSignIn ? "Sign In" : "Sign up"}
        </div>
        <form>
          <input
            className="bg-slate-700 mb-4 rounded-md p-2 w-full"
            type="text"
            placeholder="Email"
          />
          {!isSignIn && (
            <input
              className="bg-slate-700 mb-4 rounded-md p-2 w-full"
              type="text"
              placeholder="Name"
            />
          )}
          <input
            className="bg-slate-700 mb-4 rounded-md p-2 w-full"
            type="password"
            placeholder="Password"
          />
          <button className="bg-red-600 rounded-md p-2 mt-2 w-full text-white font-semibold">
            {isSignIn ? "Sign In" : "Sign up"}
          </button>
        </form>
        {isSignIn ? (
          <div className="text-slate-500 my-4">
            New to Netflix?{" "}
            <span className="text-white cursor-pointer" onClick={toggleSignIn}>
              Sign up now
            </span>
          </div>
        ) : (
          <div className="text-slate-500 my-4">
            Already registered?{" "}
            <span onClick={toggleSignIn} className="text-white cursor-pointer">
              Sign in here...
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  // const toggleForgotPassword = () =>{
  //    console.log("Password got reset");
  // }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          className="p-4 my-4 w-full bg-black bg-opacity-10 border rounded-lg"
          type="text"
          placeholder="Full Name"
          required
        />
        }
        <input
          className="p-4 my-4 w-full bg-black bg-opacity-10 border rounded-lg focus:border-red-700"
          type="text"
          placeholder="Email"
          required
        />
        
        <input
          className="p-4 my-4 w-full bg-black bg-opacity-10 border rounded-lg"
          type="text"
          placeholder="Password"
          required
        />
         {/* {!isSignInForm && <input
          className="p-4 my-4 w-full bg-black bg-opacity-10 border rounded-lg"
          type="text"
          placeholder="Re-enter Password"
          required
        />
         } */}
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg" type="submit">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <button className="px-20">Forgot password?</button>
        <p className="my-6 cursor-pointer" onClick={toggleSignInForm}>
         {isSignInForm ? "New to Netflix? Sign Up now.":"Already Registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;

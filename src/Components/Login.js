import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(true);
 
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the form data
    // checkValidData(email, password);
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(name.current.value,email.current.value,password.current.value);
    // console.log(message);
    setErrorMessage(message);

    //SIGN/SIHN UP

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-black bg-opacity-10 border rounded-lg"
            type="text"
            placeholder="Full Name"
            required
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-black bg-opacity-10 border rounded-lg focus:border-red-700"
          type="text"
          placeholder="Email"
          required
        />

        <input
          ref={password}
          className="p-4 my-4 w-full bg-black bg-opacity-10 border rounded-lg"
          type="text"
          placeholder="Password"
          required
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg"
          onClick={handleButtonClick}
          type="submit"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <button className="px-20">Forgot password?</button>
        <p className="my-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now."
            : "Already Registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;

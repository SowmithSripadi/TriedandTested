import React from "react";
import { SignIn, useSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function TestUserLogin({ redirectLocation }) {
  const { signIn } = useSignIn();
  const emailAddress = "test@gmail.com";
  const password = "12345678";
  const navigate = useNavigate();
  const handleTestUserLogin = async () => {
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });
      if (signInAttempt.status === "complete") {
        navigate(redirectLocation);
        location.reload();
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <button
      onClick={handleTestUserLogin}
      className="bg-secondaryColor  text-black px-4 py-2 rounded-lg border-2 border-gray-400"
    >
      Login as test user
    </button>
  );
}

export default TestUserLogin;

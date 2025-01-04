import { SignIn } from "@clerk/clerk-react";
import React from "react";
import TestUserLogin from "./TestUserLogin";

function Login() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-[calc(100vh-80px)]">
      <SignIn signUpUrl="/register" />
      <TestUserLogin redirectLocation={"/"} />
    </div>
  );
}

export default Login;

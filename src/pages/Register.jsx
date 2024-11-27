import { SignUp } from "@clerk/clerk-react";
import React from "react";

function Register() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)]">
      <SignUp signInUrl="/login" />
    </div>
  );
}

export default Register;

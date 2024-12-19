import { useUser } from "@clerk/clerk-react";
import React from "react";
import Loading from "../pages/Loading";

function Write() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <Loading />;
  }

  if (isLoaded && !isSignedIn)
    return (
      <div className=" mt-40 font-bold text-2xl w-full h-full flex text-center justify-center">
        You should Log in
      </div>
    );

  return <div>Write</div>;
}

export default Write;

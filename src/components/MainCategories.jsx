import React from "react";
import { Link } from "react-router-dom";

function MainCategories() {
  return (
    <div className="hidden md:flex bg-gray-300  rounded-2xl p-4 shadow-lg items-center justify-center gap-8 text-black ">
      {/* Links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link to="/posts" className="">
          Link
        </Link>
      </div>
      {/* Search */}
      <div className="">Search</div>
    </div>
  );
}

export default MainCategories;

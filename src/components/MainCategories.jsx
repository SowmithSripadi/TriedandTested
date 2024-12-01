import React from "react";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";

function MainCategories() {
  return (
    <div className="hidden md:flex bg-gray-300  rounded-2xl p-4 shadow-lg items-center justify-center gap-8 text-black ">
      {/* Links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link to="/posts" className="bg-[#fbe3e8] rounded-2xl px-4 py-2 ">
          All Posts
        </Link>
        <Link
          to="/posts?cat=health"
          className="hover:bg-opacity-30 hover:bg-[#fdeef1] rounded-2xl px-4 py-2 "
        >
          Health
        </Link>
        <Link
          to="/post?cat=fitness"
          className="hover:bg-opacity-30 hover:bg-[#fdeef1] rounded-2xl px-4 py-2 "
        >
          Fitness
        </Link>
        <Link
          to="/posts?cat=skincare"
          className="hover:bg-opacity-30 hover:bg-[#fdeef1] rounded-2xl px-4 py-2 "
        >
          Skin Care
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* Search */}
      <div className="bg-gray-100 rounded-2xl flex items-center gap-2 p-2">
        <RiSearch2Line className="w-6 h-4" />
        <input
          type="text"
          placeholder="Search a post..."
          className="bg-transparent px-2"
        />
      </div>
    </div>
  );
}

export default MainCategories;

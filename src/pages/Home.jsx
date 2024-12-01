import { Link } from "react-router-dom";
import React from "react";
import { LiaFeatherAltSolid } from "react-icons/lia";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

function Home() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* Breadcrumbs */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <Link className="text-gray-500 border-b-2">Blogs and Articles</Link>
      </div>
      {/* Introduction */}
      <div className="flex items-center justify-center">
        {/* titles */}
        <div className="">
          <h1 className="text-[#5cbdb9] text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ea
            consequatur sed molestiae ipsum! lorem
          </p>
        </div>
        {/* write button */}
        <Link to="/write" className="hidden md:block">
          <button
            className="lg:w-40 lg:h-12 
          md:w-30 md:h-10 bg-[#fbe3e8] flex items-center justify-center cursor-pointer dark:border-gray-500 border-black border-2 gap-2 px-3 rounded-2xl"
          >
            <span className="lg:text-sm md:text-xs  md:text-nowrap dark:text-black">
              Write your Story
            </span>
            <LiaFeatherAltSolid className="lg:w-6 lg:h-6 dark:text-black" />
          </button>
        </Link>
      </div>
      {/* Main category */}
      <MainCategories />
      {/* top posts */}
      <FeaturedPosts />
      {/* posts lists */}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
}

export default Home;

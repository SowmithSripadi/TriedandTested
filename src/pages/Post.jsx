import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";

function Post() {
  return (
    <div className="flex flex-col gap-8 mt-4">
      {/* details */}
      <div className="flex sm:flex-row flex-col gap-8 ">
        <div className="lg:w-3/5 sm:w-2/3 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-gray-500 border-b-2">John Doe</Link>
            <span>on</span>
            <Link className="text-gray-500 border-b-2 ">Categ</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi
            cum soluta provident nobis commodi voluptatem animi labore
          </p>
        </div>
        <div className="sm:w-1/3 lg:w-2/5">
          <Image src="postImg.jpeg" />
        </div>
      </div>

      {/* content */}
      <div></div>
    </div>
  );
}

export default Post;

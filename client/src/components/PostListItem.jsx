import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
function PostListItem() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-12 ">
      <div className="md:w-1/2 xl:w-1/3 lg:flex sm:w-1/2 lg:items-start lg:justify-start">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>
      <div className="flex flex-col gap-4 lg:w-2/3  w-full">
        <Link to="/test" className="sm:text-2xl text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-gray-500 border-b-2">John Doe</Link>
          <span>on</span>
          <Link className="text-gray-500 border-b-2">Categ</Link>
          <span>2 days ago</span>
        </div>
        <div>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
            corrupti magni nam officiis consequuntur quos error temporibus sequi
            architecto dolores
          </p>
          <Link to="/test" className="text-sm text-gray-500 border-b-2">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostListItem;

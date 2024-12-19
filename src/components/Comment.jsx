import React from "react";
import Image from "../components/Image";

function Comment() {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-700 px-6 py-6 rounded-xl">
      <div className="flex items-center gap-4 mb-4">
        <Image src="userImg.jpeg" w="45" h="45" className="rounded-full" />
        <span className="font-medium">John Doe</span>
        <span className="text-gray-400 text-sm">2 days ago</span>
      </div>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        doloribus consequatur mollitia commodi optio impedit atque alias
        perferendis, rem dolores dicta obcaecati velit quas sit fuga. Illum odit
        ea laudantium!
      </span>
    </div>
  );
}

export default Comment;

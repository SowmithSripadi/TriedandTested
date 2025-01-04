import React from "react";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

function PostMenuActions() {
  return (
    <div>
      <h1 className="mt-4 mb-4 text-sm font-medium">Actions</h1>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <CiBookmark />
        <span>Save this post</span>
      </div>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <MdOutlineDelete />
        <span>Delete this post</span>
      </div>
    </div>
  );
}

export default PostMenuActions;

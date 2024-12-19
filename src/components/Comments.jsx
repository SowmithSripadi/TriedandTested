import React from "react";
import Comment from "../components/Comment";

function Comments() {
  return (
    <div className="flex flex-col gap-8 w-3/5">
      <h1 className="text-xl text-gray-500 underline"></h1>
      <div className="flex items-center justify-between gap-4 w-full">
        <textarea
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-700"
        />
        <button className="bg-primaryColor px-4 py-3 text-white dark:text-black font-medium rounded-xl">
          Send
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default Comments;

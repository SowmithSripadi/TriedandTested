import React, { useState } from "react";
import PostList from "../components/PostList";
import FilterSideMenu from "../components/FilterSideMenu";

function PostListPage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="mb-10 mt-6">
        <h1 className="text-2xl mb-6">Example Blog</h1>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-secondaryColor px-4 py-2 md:hidden mt-6 mb-6 rounded-lg dark:text-black"
        >
          {open ? "Close" : "Filter or Search"}
        </button>

        <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
          <div>
            <PostList />
          </div>
          <div className={`${open ? "block" : "hidden"} md:block`}>
            <FilterSideMenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostListPage;

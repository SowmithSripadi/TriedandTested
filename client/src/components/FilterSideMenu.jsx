import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function FilterSideMenu() {
  return (
    <div className="px-6 h-max sticky top-10 dark:bg-gray-600 bg-gray-100 p-4 rounded-2xl">
      <div className="flex flex-col gap-8">
        <div>
          <span className="font-medium mb-2 block">Search</span>
          <Search />
        </div>
        <div className="flex flex-row md:gap-4 md:flex-col gap-32">
          <div>
            <span className="font-medium">Filter</span>
            <div className="flex flex-col gap-2 mt-2 text-sm">
              <label
                htmlFor="newest"
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  id="newest"
                  name="sort"
                  value="newest"
                  className="w-4 h-4 rounded-sm border-[1.5px] appearance-none checked:bg-secondaryColor border-black dark:border-gray-300"
                />
                Newest
              </label>
              <label
                htmlFor=""
                name="sort"
                value="popular"
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  className="w-4 h-4 rounded-sm border-[1.5px] appearance-none checked:bg-secondaryColor border-black dark:border-gray-300"
                />
                Most Popular
              </label>
              <label
                htmlFor=""
                name="sort"
                value="trending"
                className="flex items-center gap-2 cursor-pointer "
              >
                <input
                  type="radio"
                  className="w-4 h-4 rounded-sm border-[1.5px] appearance-none checked:bg-secondaryColor border-black dark:border-gray-300"
                />
                Trending
              </label>
              <label
                htmlFor=""
                name="sort"
                value="oldest"
                className="flex items-center gap-2 cursor-pointer "
              >
                <input
                  type="radio"
                  className="w-4 h-4 rounded-sm border-[1.5px] appearance-none checked:bg-secondaryColor border-black dark:border-gray-300"
                />
                Oldest
              </label>
            </div>
          </div>
          <div className="">
            <span className="font-medium">Categories</span>
            <div className="flex flex-col underline gap-2 mt-4 text-sm">
              <Link to="/posts?cat=all">All</Link>
              <Link to="/posts?cat=categ1">Categ1</Link>
              <Link to="/posts?cat=categ1">Categ2</Link>
              <Link to="/posts?cat=categ1">Categ3</Link>
              <Link to="/posts?cat=categ1">Categ4</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSideMenu;

import React from "react";
import { RiSearch2Line } from "react-icons/ri";

function Search() {
  return (
    <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2 mb-8">
      <RiSearch2Line />
      <input
        type="text"
        placeholder="search a post..."
        className="bg-transparent"
      />
    </div>
  );
}

export default Search;

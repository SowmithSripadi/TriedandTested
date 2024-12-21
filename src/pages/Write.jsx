import { useUser } from "@clerk/clerk-react";
import React from "react";
import Loading from "../pages/Loading";
import TestUserLogin from "./TestUserLogin";
import ReactQuill from "react-quill";import 'react-quill/dist/quill.snow.css';

function Write() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <Loading />;
  }

  if (isLoaded && !isSignedIn)
    return (
      <div className="flex flex-col items-center gap-8">
        <div className=" mt-40 font-bold text-2xl w-full h-full flex text-center justify-center">
          You should Log in
        </div>
        <TestUserLogin redirectLocation={"/write"} />
      </div>
    );

  return (
    <div className="">
      <h1 className="mb-6">Create a new Post</h1>
      <form className="flex flex-col items-start gap-6">
        <button className="bg-secondaryColor text-black px-4 py-1 rounded-lg border-2 border-gray-400 ">
          Add a cover image
        </button>
        <input
          placeholder="Write a title here..."
          className="w-full dark:bg-black text-3xl focus:outline-none focus:ring-0"
        />
        <div className="flex gap-4 items-center">
          <label htmlFor="">Choose a category:</label>
          <select
            name="category"
            id=""
            className="dark:bg-gray-800 border-2 border-gray-300 p-1 rounded-lg"
          >
            <option value="Health">Health</option>
            <option value="Fitness">Fitness</option>
            <option value="Skin Care">Skin Care</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="A short description"
          className="w-full p-2 rounded-lg dark:bg-gray-700"
        />
        <ReactQuill theme="snow" className="w-full h-96" 
        style={{
          '--ql-toolbar-background': '#4B5563', // bg-gray-600
          '--ql-toolbar-color': '#FFFFFF',     // text-white
          '--ql-editor-background': '#1F2937', // bg-gray-800
          '--ql-editor-color': '#FFFFFF',      // text-white
        }}
        />
      </form>
    </div>
  );
}

export default Write;

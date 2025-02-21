import { useAuth, useUser } from "@clerk/clerk-react";
import React, { useState } from "react";
import Loading from "./Loading";
import TestUserLogin from "./TestUserLogin";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function Write() {
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const [value, setValue] = useState("");

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post("/posts", newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };
    console.log(data);
  };
  return (
    <div className="md:h-[calc(100vh-80px)] h-[calc(100vh-64px)]">
      <h1 className="mb-6">Create a new Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <button className="bg-secondaryColor text-black px-4 py-1 rounded-lg border-2 border-gray-400 w-max">
          Add a cover image
        </button>
        <input
          placeholder="Write a title here..."
          className=" dark:bg-black text-3xl focus:outline-none focus:ring-0"
          type="text"
          name="title"
        />
        <div className="flex gap-4 items-center">
          <label htmlFor="">Choose a category:</label>
          <select
            name="category"
            id=""
            className="dark:bg-gray-800 border-2 border-gray-300 p-1 rounded-lg"
          >
            <option value="General">General</option>
            <option value="Health">Health</option>
            <option value="Fitness">Fitness</option>
            <option value="Skin Care">Skin Care</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="A short description"
          className="p-2 rounded-lg dark:bg-gray-700 bg-gray-200"
        />

        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl"
          value={value}
          onChange={setValue}
        />

        <button className="bg-secondaryColor text-black w-max px-8 py-2 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
}

export default Write;

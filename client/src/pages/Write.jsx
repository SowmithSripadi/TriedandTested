import { useAuth, useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import TestUserLogin from "./TestUserLogin";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegFileImage } from "react-icons/fa";
import ProgressBar from "../components/ProgressBar";
import Upload from "../components/Upload";

function Write() {
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [progress, setProgress] = useState(0);

  console.log(cover);
  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return await axios.post(
        `${import.meta.env.VITE_API_URL}/posts`,
        newPost,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: (res) => {
      toast.success("Post created successfully");
      navigate(`/${res.data.post.slug}`);
    },
    onError: (error) => {
      toast.error(
        `An error occurred ${error?.response?.data?.message || error?.message}`
      );
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
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };
    // console.log(data);
    mutation.mutate(data);
  };

  return (
    <div className="md:h-[calc(100vh-80px)] h-[calc(100vh-64px)]">
      <h1 className="mb-6">Create a new Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <div className="flex gap-4 ">
          <Upload type="image" setProgress={setProgress} setData={setCover}>
            <button
              type="button"
              className="bg-secondaryColor text-black px-4 py-1 rounded-lg border-2 border-gray-400 w-max"
            >
              Add a cover image
            </button>
          </Upload>
          <span className="flex items-center justify-center">
            {cover?.name}
          </span>
        </div>
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
        <div className="flex">
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              <FaRegFileImage className="w-8 h-8" />
            </Upload>

            <div className="cursor-pointer">
              {/* <FaRegFileVideo className="w-8 h-8" /> */}
            </div>
          </div>
          <div className="w-full min-h-[300px]">
            <ReactQuill
              theme="snow"
              className="h-[200px]"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={mutation.isPending || (0 < progress && progress < 100)}
            className="bg-secondaryColor text-black w-20 h-10 flex items-center justify-center rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {mutation.isPending ? (
              <div className="w-5 h-5 aspect-square border-4 border-gray-700 border-t-gray-400 rounded-full animate-spin"></div>
            ) : (
              "Submit"
            )}
          </button>
          <ProgressBar progress={progress} />
        </div>
      </form>
    </div>
  );
}
export default Write;

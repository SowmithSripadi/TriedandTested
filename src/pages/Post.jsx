import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

function Post() {
  return (
    <div className="flex flex-col gap-8 mt-4">
      {/* details */}
      <div className="flex sm:flex-row flex-col gap-8 ">
        <div className="lg:w-3/5 sm:w-2/3 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-gray-500 border-b-2">John Doe</Link>
            <span>on</span>
            <Link className="text-gray-500 border-b-2 ">Categ</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi
            cum soluta provident nobis commodi voluptatem animi labore
          </p>
        </div>
        <div className="sm:w-1/3 lg:w-2/5">
          <Image src="postImg.jpeg" className="rounded-2xl" />
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="lg:text-lg flex flex-col gap-6 text-justify ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            velit quas officiis reprehenderit mollitia culpa dolor earum
            explicabo corrupti adipisci. Nemo hic quis quae eligendi maiores!
            Nihil hic quia facere. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium quas illo sunt nulla incidunt quos
            perspiciatis ducimus doloremque doloribus vitae, cum animi dicta? Id
            assumenda accusamus, repellat inventore alias nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            velit quas officiis reprehenderit mollitia culpa dolor earum
            explicabo corrupti adipisci. Nemo hic quis quae eligendi maiores!
            Nihil hic quia facere. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium quas illo sunt nulla incidunt quos
            perspiciatis ducimus doloremque doloribus vitae, cum animi dicta? Id
            assumenda accusamus, repellat inventore alias nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            velit quas officiis reprehenderit mollitia culpa dolor earum
            explicabo corrupti adipisci. Nemo hic quis quae eligendi maiores!
            Nihil hic quia facere. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium quas illo sunt nulla incidunt quos
            perspiciatis ducimus doloremque doloribus vitae, cum animi dicta? Id
            assumenda accusamus, repellat inventore alias nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            velit quas officiis reprehenderit mollitia culpa dolor earum
            explicabo corrupti adipisci. Nemo hic quis quae eligendi maiores!
            Nihil hic quia facere. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium quas illo sunt nulla incidunt quos
            perspiciatis ducimus doloremque doloribus vitae, cum animi dicta? Id
            assumenda accusamus, repellat inventore alias nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            velit quas officiis reprehenderit mollitia culpa dolor earum
            explicabo corrupti adipisci. Nemo hic quis quae eligendi maiores!
            Nihil hic quia facere. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium quas illo sunt nulla incidunt quos
            perspiciatis ducimus doloremque doloribus vitae, cum animi dicta? Id
            assumenda accusamus, repellat inventore alias nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            velit quas officiis reprehenderit mollitia culpa dolor earum
            explicabo corrupti adipisci. Nemo hic quis quae eligendi maiores!
            Nihil hic quia facere. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium quas illo sunt nulla incidunt quos
            perspiciatis ducimus doloremque doloribus vitae, cum animi dicta? Id
            assumenda accusamus, repellat inventore alias nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            velit quas officiis reprehenderit mollitia culpa dolor earum
            explicabo corrupti adipisci. Nemo hic quis quae eligendi maiores!
            Nihil hic quia facere. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium quas illo sunt nulla incidunt quos
            perspiciatis ducimus doloremque doloribus vitae, cum animi dicta? Id
            assumenda accusamus, repellat inventore alias nobis.
          </p>
        </div>
        {/* menu */}
        <div className="p-4 h-max sticky top-8 bg-gray-200 dark:bg-gray-800 shadow-xl rounded-3xl">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link>John Doe</Link>
            </div>
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-4 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to="/">
              All
            </Link>
            <Link className="underline" to="/">
              Categ1
            </Link>
            <Link className="underline" to="/">
              Categ2
            </Link>
            <Link className="underline" to="/">
              Categ3
            </Link>
            <Link className="underline" to="/">
              Categ4
            </Link>
          </div>
          <h1 className="mt-4 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
}

export default Post;

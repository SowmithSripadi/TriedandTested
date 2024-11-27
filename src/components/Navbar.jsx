import React, { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignInButton,
  SignedOut,
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="w-full flex justify-between h-16 md:h-20 items-center">
      <Link to="/" className="">
        {/* Logo */}
        {theme === "light" ? (
          <img
            src="/logo.png"
            alt="logo in black"
            className="w-[150px] h-[40px]"
          />
        ) : (
          <img
            src="/logoDark.png"
            alt="logo in black"
            className="w-[150px] h-[40px]"
          />
        )}
      </Link>
      {/* mobile menu  */}
      <div className="md:hidden">
        <div
          className="cursor-pointer z-10"
          onClick={() => setOpen((prev) => (prev = !prev))}
        >
          {open === true ? <IoMdCloseCircleOutline /> : <RxHamburgerMenu />}
        </div>
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-white ${
            open ? "left-0" : "left-[100%]"
          } transition-all ease-in-out gap-8`}
        >
          <Link to="/">Home</Link>
          <Link to="">Trending</Link>
          <Link to="">Most Popular</Link>
          <Link to="">About</Link>
          <Link to="">
            <button className="bg-[#53535c] text-white p-2 px-4 rounded-2xl">
              Login
            </button>
          </Link>
        </div>
      </div>
      {/* desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 ">
        <Link to="">Home</Link>
        <Link to="">Trending</Link>
        <Link to="">Most Popular</Link>
        <Link to="">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="bg-[#53535c] text-white p-2 px-4 rounded-2xl">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      <button
        className="bg-white dark:bg-gray-400 dark:text-gray-800  p-2 rounded-lg"
        onClick={toggleTheme}
      >
        ToggleDarkmode
      </button>
    </div>
  );
}

export default Navbar;

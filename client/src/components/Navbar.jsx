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
  useAuth,
} from "@clerk/clerk-react";
import { MdDarkMode } from "react-icons/md";
import DarkModeButton from "./DarkModeButton";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => console.log(token));
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      setIsChecked(true);
    } else {
      root.classList.remove("dark");
      setIsChecked(false);
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
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 dark:bg-black bg-white ${
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
          <div className="flex items-center justify-center gap-4">
            <DarkModeButton
              handleThemeChange={toggleTheme}
              isChecked={isChecked}
            />
            <MdDarkMode className="w-5 h-5" />
          </div>
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
            <button className="dark:bg-[#53535c] bg-gray-300 text-w≈hite p-2 px-4 rounded-2xl">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <div className="flex items-center justify-center gap-4">
          <DarkModeButton
            handleThemeChange={toggleTheme}
            isChecked={isChecked}
          />
          <MdDarkMode className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

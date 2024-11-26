import React, { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

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
      <div className="">
        {/* Logo */}
        {theme === "light" ? (
          <img src="../../logo.png" className="w-[150px ] h-[40px]" />
        ) : (
          <img src="../../logoDark.png" className="w-[150px] h-[40px]" />
        )}
      </div>
      {/* mobile menu  */}
      <div className="md:hidden">
        <div
          className="cursor-pointer"
          onClick={() => setOpen((prev) => (prev = !prev))}
        >
          {open === true ? <IoMdCloseCircleOutline /> : <RxHamburgerMenu />}
        </div>
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16  ${
            open ? "left-0" : "left-[100%]"
          } transition-all ease-in-out gap-8`}
        >
          <a href="">Home</a>
          <a href="">Trending</a>
          <a href="">Most Popular</a>
          <a href="">About</a>
          <a href="">
            <button className="bg-[#53535c] text-white p-2 px-4 rounded-2xl">
              Login
            </button>
          </a>
        </div>
      </div>
      {/* desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 ">
        <a href="">Home</a>
        <a href="">Trending</a>
        <a href="">Most Popular</a>
        <a href="">About</a>
        <a href="">
          <button className="bg-[#53535c] text-white p-2 px-4 rounded-2xl">
            Login
          </button>
        </a>
      </div>

      {/* <button
        className="bg-white dark:bg-gray-400 dark:text-gray-800  p-2 rounded-lg"
        onClick={toggleTheme}
      >
        ToggleDarkmode
      </button> */}
    </div>
  );
}

export default Navbar;

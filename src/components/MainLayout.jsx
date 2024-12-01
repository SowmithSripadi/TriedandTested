import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-52">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;

import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div className="bg-black">
      <div className="flex flex-col bg-white w-full overflow-hidden max-w-[1600px] border border-black outline outline-white outline-offset-4 mx-auto relative">
        <Navbar />
        <div className="min-h-[50vh]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;

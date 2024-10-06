import React, { createContext, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const CategoriesContext = createContext();

function MainLayout() {
  const [selectedCategories, setSelectedCategories] = useState('');

  return (
    <CategoriesContext.Provider value={{ selectedCategories, setSelectedCategories }}>
      <div className="bg-black">
        <div className="flex flex-col bg-white w-full overflow-hidden max-w-[1600px] border border-black outline outline-white outline-offset-4 mx-auto relative">
          <Navbar />
          <div className="max-w-[1600px] relative overflow-hidden">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </CategoriesContext.Provider>
  );
}

export default MainLayout;
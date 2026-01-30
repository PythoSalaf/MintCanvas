import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Mobilebar, Sidebar, Topbar } from "../components";

const Layout = () => {
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isLightMode) {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [isLightMode]);

  return (
    <div className="w-full text-white bg-[#131129] light:bg-[#F2F2F2] flex items-start transition-colors duration-300">
      <div className="hidden md:block fixed md:w-[7%] lg:w-[5%] bg-[#1D1932] light:bg-white h-screen">
        <Sidebar />
      </div>

      <div className="w-full ml-auto md:w-[93%] lg:w-[95%]">
        <div className="w-[95%] mx-auto">
          <div className="fixed top-0 right-0  z-50 w-full md:w-[93%] lg:w-[95%] ml-auto">
            <Topbar isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
          </div>

          <div className="pt-14  lg:pt-16 pb-6">
            <Outlet />
          </div>
          <div className="block fixed z-50 bottom-0 left-0 w-full md:hidden">
            <Mobilebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

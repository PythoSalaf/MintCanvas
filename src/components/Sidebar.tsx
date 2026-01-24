import { NavLink } from "react-router";
import { SiMeilisearch } from "react-icons/si";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { BiDialpadAlt } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoStarOutline, IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";

const Sidebar = () => {
  // none active icon #65646A
  // active icon #6F4FF2
  const active =
    "flex items-center justify-center w-full text-[#6F4FF2] transition-colors duration-300 ease-in-out";
  const nonActive =
    "flex items-center justify-center w-full text-[#65646A] transition-colors duration-300 ease-in-out";
  return (
    <div className="w-full py-1.5">
      <div className="w-[85%] mx-auto flex items-center flex-col">
        <NavLink
          to="/"
          className="w-full bg-[#6F4FF2] py-1.5 rounded-md
    flex items-center justify-center
    transition-transform duration-500 ease-in-out
    hover:rotate-360 shadow-lg"
        >
          <SiMeilisearch size={30} className=" text-white" />
        </NavLink>
        <div className="w-full mt-16 flex flex-col items-center justify-center gap-y-7">
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? active : nonActive}`}
          >
            <HiMiniSquares2X2 size={22} />
          </NavLink>
          <NavLink
            to="/bids"
            className={({ isActive }) => `${isActive ? active : nonActive}`}
          >
            <BiDialpadAlt size={24} />
          </NavLink>
          <NavLink
            to="/saved"
            className={({ isActive }) => `${isActive ? active : nonActive}`}
          >
            <MdOutlineFavoriteBorder size={22} />
          </NavLink>
          <NavLink
            to="/collection"
            className={({ isActive }) => `${isActive ? active : nonActive}`}
          >
            <IoStarOutline size={22} />
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => `${isActive ? active : nonActive}`}
          >
            <CgProfile size={22} />
          </NavLink>
          <NavLink
            to="/setting"
            className={({ isActive }) => `${isActive ? active : nonActive}`}
          >
            <IoSettingsOutline size={22} />
          </NavLink>
        </div>
        <div className="w-full flex items-center justify-center mt-24 cursor-pointer">
          <div className="flex items-center justify-center w-full">
            <TbLogout
              size={22}
              className="text-[#65646A] hover:text-[#6F4FF2] transition-colors duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

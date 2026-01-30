import { BiDialpadAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoSettingsOutline, IoStarOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { NavLink } from "react-router";

const Mobilebar = () => {
  const active =
    "flex items-center justify-center w-full text-[#6F4FF2] transition-colors duration-300 ease-in-out";
  const nonActive =
    "flex items-center justify-center w-full text-[#65646A] transition-colors duration-300 ease-in-out";

  return (
    <div className="bg-[#1D1932] light:bg-white w-full py-2 flex items-center">
      <div className="w-[95%] mx-auto py-1.5 flex items-center gap-x-2">
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? active : nonActive}`}
        >
          <HiMiniSquares2X2 size={20} />
        </NavLink>
        <NavLink
          to="/bids"
          className={({ isActive }) => `${isActive ? active : nonActive}`}
        >
          <BiDialpadAlt size={22} />
        </NavLink>
        <NavLink
          to="/saved"
          className={({ isActive }) => `${isActive ? active : nonActive}`}
        >
          <MdOutlineFavoriteBorder size={20} />
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive }) => `${isActive ? active : nonActive}`}
        >
          <IoStarOutline size={20} />
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
        <div className="flex items-center justify-center w-full">
          <TbLogout size={22} className="text-[#65646A]" />
        </div>
      </div>
    </div>
  );
};

export default Mobilebar;

import { BiSearch } from "react-icons/bi";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuSunMoon } from "react-icons/lu";
import { Profile } from "../assets";
import { NavLink } from "react-router";
import { SiMeilisearch } from "react-icons/si";

interface TopbarProps {
  isLightMode: boolean;
  setIsLightMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({ isLightMode, setIsLightMode }: TopbarProps) => {
  return (
    <div className="w-full pt-0.5 md:pt-2 bg-[#131129] light:bg-[#F2F2F2]">
      <div className="w-[95%] mx-auto py-2 flex items-center justify-between">
        <NavLink
          to="/"
          className="w-fit px-2 bg-[#6F4FF2] py-1 rounded-md
                     flex md:hidden items-center justify-center
                     transition-transform duration-500 ease-in-out
                     hover:rotate-360 shadow-lg"
        >
          <SiMeilisearch size={21} className="text-white" />
        </NavLink>

        <div className="relative">
          <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-base md:text-lg text-gray-400" />
          <input
            type="search"
            placeholder="Search here"
            className="
              w-36 md:w-80
              bg-[#1D1932] light:bg-[#FFF]
              pl-10 py-1 rounded-md
              text-[#68676E]
              placeholder:text-[#68676E]
              focus:outline-none
            "
          />
        </div>

        <div className="flex items-center gap-x-2 md:gap-x-5">
          <button
            onClick={() => setIsLightMode(!isLightMode)}
            className="cursor-pointer"
          >
            {isLightMode ? (
              <LuSunMoon className="text-[22px] md:text-2xl text-[#65646A]" />
            ) : (
              <TiWeatherSunny className="text-[22px] md:text-2xl text-white" />
            )}
          </button>
          <div className="cursor-pointer">
            <IoMdNotificationsOutline className="text-xl md:text-2xl text-white light:text-[#65646A]" />
          </div>
          <div className="cursor-pointer">
            <img
              src={Profile}
              alt="profile"
              className="h-7 md:h-8 w-7 md:w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

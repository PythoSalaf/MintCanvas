import { useState } from "react";
import { NftCard } from "../components";

type TabType = "all" | "artwork" | "book";
const Collection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  return (
    <div className="w-full text-white light:text-black">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
        Collections
      </h2>
      <div className="flex items-center justify-between mt-1.5">
        <h4 className="text-sm md:text-base">Welcome to Collection Page</h4>
        <h4 className="text-[#6C7AA0] text-xs md:text-sm font-semibold">
          Home / Collection
        </h4>
      </div>
      <div className="mt-10">
        <div className="flex items-center gap-x-2 md:gap-x-2">
          {(["all", "artwork", "book"] as TabType[]).map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={` py-0.5 rounded-lg cursor-pointer capitalize text-xs font-semibold md:text-sm lg:text-base transition-all duration-200
        ${
          activeTab === item
            ? "bg-[#6F4FF2] text-white px-3"
            : "bg-transparent text-white light:text-black"
        }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 ">
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
        </div>
      </div>
    </div>
  );
};

export default Collection;

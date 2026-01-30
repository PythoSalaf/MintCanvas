import { NftCard } from "../components";

const Saved = () => {
  return (
    <div className="w-full text-white light:text-black">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
        Saved Items
      </h2>
      <div className="flex items-center justify-between mt-1.5">
        <h4 className="text-sm md:text-base">Welcome to Saved Page</h4>
        <h4 className="text-[#6C7AA0] text-xs md:text-sm font-semibold">
          Home / Saved
        </h4>
      </div>
      <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 ">
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
  );
};

export default Saved;

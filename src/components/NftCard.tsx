import { NFT2 } from "../assets";

const NftCard = () => {
  return (
    <div className="w-[90%] md:w-full mx-auto bg-[#1D1932] light:bg-white py-3 rounded-xl shadow-lg text-white light:text-black">
      <div className="w-[90%] mx-auto">
        <div className="w-full h-48 md:h-56 rounded-xl ">
          <img
            src={NFT2}
            alt="nft"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="py-2.5">
          <h2 className="text-base md:text-lg lg:text-xl font-semibold">
            Liquid Wave
          </h2>
          <div className="py-1 flex items-center justify-between">
            <h3 className="text-base md:text-lg ">Current Bid</h3>
            <p className="text-[#6F4FF2] font-semibold  text-sm md:text-base">
              0.05Eth
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-base md:text-lg ">Auction Time</h3>
            <p className="text-[#6C7AA0] font-semibold text-sm md:text-base">
              3h ago
            </p>
          </div>
          <div className="w-full mt-5">
            <button className="w-full py-1.5 cursor-pointer bg-[#6F4FF2] text-white rounded-xl">
              Place a bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;

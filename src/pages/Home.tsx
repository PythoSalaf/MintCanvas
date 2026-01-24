import { BiderTwo, NFT } from "../assets";
import { NftCard } from "../components";

const Home = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-start flex-col md:flex-row gap-4 md:gap-6  lg:gap-9">
        <div className="w-full bg-linear-to-r from-purple-900 to-pink-600 rounded-lg shadow-lg py-2.5">
          <div className="w-[90%] mx-auto ">
            <h2 className="text-xl md:text-2xl lg:text-3xl leading-7  md:leading-10 lg:leading-12 font-semibold">
              Discover, Collect, Sell <br /> and Create your NFT
            </h2>
            <p className="py-3 md:py-3 text-sm md:text-base ">
              Digital marketplace for crypto collectibles and non fungible
              tokens
            </p>
            <div className="flex items-center gap-7 py-2.5">
              <button className="bg-[#6F4FF2] text-white rounded-lg px-5 py-1">
                Explore
              </button>
              <button className="bg-[#DC3546] text-white rounded-lg px-5 py-1">
                Create
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#1D1932] light:bg-white shadow-lg rounded-lg py-2.5">
          <div className="w-[94%] mx-auto flex items-start flex-col md:flex-row gap-2">
            <div className="w-full">
              <img
                src={NFT}
                alt="nft-logo"
                className="w-full  md:w-60 md:h-44 rounded-xl"
              />
            </div>
            <div className="w-full text-white light:text-black">
              <div className="flex items-center gap-2.5">
                <img
                  src={BiderTwo}
                  alt="bider-icon"
                  className="h-7 md:h-10 w-7 md:w-10 rounded-full"
                />
                <h2 className="text-sm md:text-base lg:text-lg font-semibold">
                  John Abraham
                </h2>
              </div>
              <div className="pt-3 pb-2">
                <h2 className="text-sm md:text-base lg:text-lg font-semibold">
                  Birghten LQ
                </h2>
                <div className="py-1.5 flex items-center justify-between">
                  <div className="">
                    <h2 className="text-xs md:text-sm lg:text-base font-semibold">
                      Auction Time
                    </h2>
                    <p className="pt-1 text-xs md:text-sm lg:text-base">
                      3h 1m 50s
                    </p>
                  </div>
                  <div className="">
                    <h2 className="text-xs md:text-sm lg:text-base font-semibold">
                      Current Bid
                    </h2>
                    <p className="pt-1 text-xs md:text-sm lg:text-base">
                      0.15ETH
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full flex items-center justify-between py-1 gap-4">
                <button className="bg-[#6F4FF2] cursor-pointer text-white w-full text-xs md:text-sm lg:text-base rounded-xl py-1.5 font-semibold">
                  Place a bid
                </button>
                <button className="bg-[#DC3546] cursor-pointer text-white w-full text-xs md:text-sm lg:text-base rounded-xl py-1.5 font-semibold">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-7 md:mt-10 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg  text-white light:text-black md:text-xl lg:text-2xl font-semibold">
            Trending NFTs
          </h2>
          <div className="flex items-center gap-x-2 md:gap-x-4">
            {["All", "Art work", "Books"].map((item, index) => (
              <button
                className="text-sm md:text-base lg:text-lg text-[#6F4FF2]"
                key={index}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
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

export default Home;

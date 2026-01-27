import {
  BiderFive,
  BiderFour,
  BiderOne,
  BiderSeven,
  BiderSix,
  BiderThree,
  BiderTwo,
  NFT,
} from "../assets";
import { CreatorCard, NftCard } from "../components";
import { FaWallet } from "react-icons/fa";
import { BsFillFileTextFill } from "react-icons/bs";
import type { IconType } from "react-icons";

interface TrendBidItem {
  id: number;
  title: string;
  subtitle: string;
  percent: string;
  icon: IconType;
  bgColor: string;
}

interface RecentActivityItem {
  id: number;
  biderImage: string;
  biderName: string;
  action: string;
  time: string;
}

const Home = () => {
  const creators = [
    {
      id: 1,
      image: BiderTwo,
      name: "John Abraham",
      itemAmount: "18 Items",
    },
    {
      id: 2,
      image: BiderThree,
      name: "Sarah Wilson",
      itemAmount: "24 Items",
    },
    {
      id: 3,
      image: BiderOne,
      name: "Michael Lee",
      itemAmount: "12 Items",
    },
    {
      id: 4,
      image: BiderFive,
      name: "Jack Lee",
      itemAmount: "7 Items",
    },
    {
      id: 5,
      image: BiderSeven,
      name: "Lola Smith",
      itemAmount: "12 Items",
    },
    {
      id: 6,
      image: BiderFour,
      name: "Michael Lee",
      itemAmount: "12 Items",
    },
  ];

  const recentActivityItem: RecentActivityItem[] = [
    {
      id: 1,
      biderImage: BiderSix,
      biderName: "Maya",
      action: "placed a bid",
      time: "5 mins ago",
    },
    {
      id: 2,
      biderImage: BiderFive,
      biderName: "DeSalaf",
      action: "Sent you a bid",
      time: "8 mins ago",
    },
    {
      id: 3,
      biderImage: BiderFour,
      biderName: "Pytho",
      action: "purchased",
      time: "10 mins ago",
    },
    {
      id: 4,
      biderImage: BiderThree,
      biderName: "DeSalaf",
      action: "placed a bid",
      time: "12 mins ago",
    },
    {
      id: 5,
      biderImage: BiderTwo,
      biderName: "DeSalaf",
      action: "placed a bid",
      time: "16 mins ago",
    },
  ];
  const trendBidItem: TrendBidItem[] = [
    {
      id: 1,
      title: "24K",
      subtitle: "Art works",
      percent: "+168.001",
      icon: FaWallet,
      bgColor: "#6F4FF2",
    },
    {
      id: 2,
      title: "12K",
      subtitle: "Auction",
      percent: "-120.005",
      icon: BsFillFileTextFill,
      bgColor: "#DC3546",
    },
    {
      id: 3,
      title: "18K",
      subtitle: "Creators",
      percent: "+420.69",
      icon: FaWallet,
      bgColor: "#50BB25",
    },
  ];
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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 mt-5">
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
      <section className="w-full my-14">
        <h2 className="text-lg  text-white light:text-black md:text-xl lg:text-2xl font-semibold">
          Trending Bids
        </h2>
        <div className="mt-5 flex items-start flex-col md:flex-row gap-7">
          <div className="w-full md:w-[25%] flex flex-col gap-4">
            {trendBidItem.map((item) => (
              <div
                className="w-full bg-[#1D1932] light:bg-white rounded-xl py-2 shadow-lg"
                key={item.id}
              >
                <div className="w-[90%] mx-auto flex items-start justify-between">
                  <div
                    className="h-9 w-9 md:h-12 md:w-12  rounded-full flex items-center justify-center "
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <item.icon className="text-white text-base md:text-lg lg:text-xl " />
                  </div>
                  <div className="">
                    <h2 className="text-lg md:text-xl text-white light:text-black lg:text-2xl font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-xs md:text-sm lg:text-base text-[#68676E]">
                      {item.subtitle}
                    </p>
                  </div>
                  <h2
                    className={`text-sm md:text-base font-semibold ${
                      item.percent.startsWith("-")
                        ? "text-red-600"
                        : "text-[#50BB25]"
                    }`}
                  >
                    {item.percent}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-[45%] bg-[#1D1932] light:bg-white h-44"></div>
          <div className="w-full md:w-[30%] bg-[#1D1932] light:bg-white h-44"></div>
        </div>
      </section>
      <section className="w-full">
        <div className="w-full flex items-start gap-8 flex-col md:flex-row">
          <div className="w-full md:w-[40%] ">
            <div className="flex items-center justify-between">
              <h2 className="text-white light:text-black font-semibold text-lg md:text-xl lg:text-2xl">
                Recent Activity
              </h2>
              <button className="text-[#6F4FF2] text-sm md:text-base lg:text-lg font-semibold cursor-pointer">
                See more
              </button>
            </div>
            <div className="mt-4 w-full bg-[#1D1932] light:bg-white  rounded-lg py-4 shadow-lg">
              <div className="w-full ">
                <div className="w-[92%] mx-auto ">
                  {recentActivityItem.map((item) => (
                    <div
                      className="flex items-center justify-between border-b border-b-[#dadada] pb-2"
                      key={item.id}
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.biderImage}
                          alt={`{item.biderName}-icon`}
                          className="w-9 h-9 rounded-full"
                        />
                        <div className="text-white light:text-black">
                          <h3 className="text-base md:text-lg font-semibold">
                            {item.biderName}
                          </h3>
                          <p className="text-xs md:text-sm lg:text-base font-semibold">
                            {item.action}
                          </p>
                        </div>
                      </div>
                      <p className="text-white light:text-black text-xs md:text-sm lg:text-base font-semibold">
                        {item.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[60%] ">
            <h2 className="text-white light:text-black font-semibold text-lg md:text-xl lg:text-2xl">
              Top Creators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {creators.map((item) => (
                <CreatorCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

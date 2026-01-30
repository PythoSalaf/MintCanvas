import { BsFillFileTextFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { BiderFive, NFT, NFT2, NFT3 } from "../assets";
import type { BidRow } from "../components/BidDummy";
import { Table } from "../components";

interface BidItem {
  id: number;
  title: string;
  subtitle: string;
  icon: IconType;
  bgColor: string;
}

const Bid = () => {
  const bidTableData: BidRow[] = [
    {
      id: 1,
      item: { image: NFT, title: "Cute Cube", author: "John Abraham" },
      openPrice: "2.50 ETH",
      yourOffer: "2.00 ETH",
      recentOffer: { image: BiderFive, price: "1.50 ETH" },
      timeLeft: "12:10:45",
      action: "Ended",
    },
    {
      id: 2,
      item: { image: NFT2, title: "Meta Monkey", author: "Alex Brown" },
      openPrice: "1.80 ETH",
      yourOffer: "1.20 ETH",
      recentOffer: { image: BiderFive, price: "1.40 ETH" },
      timeLeft: "05:22:10",
      action: "Bid Now",
    },
    {
      id: 3,
      item: { image: NFT3, title: "Crypto Punky", author: "Sarah Lee" },
      openPrice: "3.10 ETH",
      yourOffer: "2.70 ETH",
      recentOffer: { image: BiderFive, price: "2.90 ETH" },
      timeLeft: "01:45:30",
      action: "Live",
    },
    {
      id: 4,
      item: { image: NFT, title: "Pixel Art", author: "Michael Doe" },
      openPrice: "0.95 ETH",
      yourOffer: "0.80 ETH",
      recentOffer: { image: BiderFive, price: "0.90 ETH" },
      timeLeft: "08:15:00",
      action: "Bid Now",
    },
    {
      id: 5,
      item: { image: NFT2, title: "Cyber Skull", author: "Jane Smith" },
      openPrice: "4.20 ETH",
      yourOffer: "3.90 ETH",
      recentOffer: { image: BiderFive, price: "4.00 ETH" },
      timeLeft: "00:59:12",
      action: "Ending",
    },
    {
      id: 6,
      item: { image: NFT3, title: "Rare Ape", author: "Chris Evans" },
      openPrice: "5.00 ETH",
      yourOffer: "4.50 ETH",
      recentOffer: { image: BiderFive, price: "4.80 ETH" },
      timeLeft: "14:20:00",
      action: "Live",
    },
    {
      id: 7,
      item: { image: NFT, title: "Neon World", author: "Tony Stark" },
      openPrice: "2.30 ETH",
      yourOffer: "2.10 ETH",
      recentOffer: { image: BiderFive, price: "2.20 ETH" },
      timeLeft: "06:40:55",
      action: "Bid Now",
    },
  ];
  const BidItem: BidItem[] = [
    {
      id: 1,
      title: "24K",
      subtitle: "Art works",
      icon: FaWallet,
      bgColor: "#6F4FF2",
    },
    {
      id: 2,
      title: "12K",
      subtitle: "Auction",
      icon: BsFillFileTextFill,
      bgColor: "#50BB25",
    },
    {
      id: 3,
      title: "18K",
      subtitle: "Creators",
      icon: FaWallet,
      bgColor: "#F9D62C",
    },
    {
      id: 4,
      title: "90",
      subtitle: "Canceled",
      icon: FaWallet,
      bgColor: "#DC3546",
    },
  ];
  return (
    <div className="w-full text-white light:text-black">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Bids</h2>
      <div className="flex items-center justify-between mt-1.5">
        <h4 className="text-sm md:text-base">Welcome to Bid Page</h4>
        <h4 className="text-[#6C7AA0] text-xs md:text-sm font-semibold">
          Home / Bid
        </h4>
      </div>
      <div className="mt-5  mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7">
        {BidItem.map((item) => (
          <div
            className="w-full bg-[#1D1932] light:bg-white rounded-xl py-2 shadow-lg"
            key={item.id}
          >
            <div className="w-[90%] mx-auto flex items-start gap-5">
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
            </div>
          </div>
        ))}
      </div>
      <div className="w-full ">
        <div className="flex items-center justify-between">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
            Active Bids
          </h2>
          <button className="bg-[#6F4FF2] text-white rounded-xl py-1.5 px-6 cursor-pointer">
            place a bid
          </button>
        </div>
        <div className="mt-6 mb-8 md:mb-0">
          <Table data={bidTableData} />
        </div>
      </div>
    </div>
  );
};

export default Bid;

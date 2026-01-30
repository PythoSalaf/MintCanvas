import React from "react";
import type { BidRow } from "./BidDummy";

type TableProps = {
  data: BidRow[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="relative w-full z-10">
      {/* Horizontal scroll on mobile */}
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 z-10 scrollbar-track-transparent">
        <table className="min-w-full w-full text-sm md:text-base border-collapse">
          <thead className="border-b border-[#6C7AA0]">
            <tr className="text-left">
              {[
                "S/N",
                "Item List",
                "Open Price",
                "Your Offer",
                "Recent Offer",
                "Time Left",
                "Action",
              ].map((header) => (
                <th
                  key={header}
                  className="px-4 py-3 font-semibold whitespace-nowrap text-white light:text-black"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className="bg-[#1D1932] light:bg-white text-white light:text-black border-b border-[#2E2A47]"
              >
                <td className="px-4 py-3 whitespace-nowrap">{row.id}</td>

                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <img
                      src={row.item.image}
                      alt={row.item.title}
                      className="w-9 h-9 rounded-xl"
                    />
                    <div>
                      <p className="font-semibold text-xs md:text-sm lg:text-base">
                        {row.item.title}
                      </p>
                      <p className="text-xs opacity-70">{row.item.author}</p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-3 whitespace-nowrap">{row.openPrice}</td>

                <td className="px-4 py-3 whitespace-nowrap">{row.yourOffer}</td>

                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <img
                      src={row.recentOffer.image}
                      alt="bidder"
                      className="w-7 h-7 rounded-full"
                    />
                    {row.recentOffer.price}
                  </div>
                </td>

                <td className="px-4 py-3 whitespace-nowrap">{row.timeLeft}</td>

                <td className="px-4 py-3 whitespace-nowrap font-semibold">
                  {row.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

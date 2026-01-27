interface CreatorCardProps {
  image: string;
  name: string;
  itemAmount: string;
}
const CreatorCard = ({ image, name, itemAmount }: CreatorCardProps) => {
  return (
    <div className="w-[94%] mx-auto md:w-full rounded-xl py-3.5 bg-[#1D1B29] light:bg-white shadow-lg hover:shadow-2xl transition-all duration-300 text-white light:text-black">
      <div className="w-[95%] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt="bider-icon"
            className="h-8 w-8 md:h-10 md:w-10 rounded-full"
          />
          <div className="">
            <h3 className="text-sm md:text-base lg:text-lg font-semibold">
              {name}
            </h3>
            <p className="text-xs md:text-base lg:text-lg">{itemAmount}</p>
          </div>
        </div>
        <div className="">
          <button className="border text-sm md:text-base  border-[#6F4FF2] px-5 rounded-lg py-1">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;

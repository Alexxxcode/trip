import { HotelType } from "@/types/trips";
import { getTime } from "@/utils";

interface HotelCardType {
  hotel: HotelType;
}

const HotelCard = ({ hotel }: HotelCardType) => {
  return (
    <li className="md:flex relative">
      <div className="px-5 py-2 rounded bg-[#d7b38b] grow shadow-md">
        <div className="text-sm text-[#232323]">
          時間:
          {`${getTime(hotel.check_in_time)} ~ ${getTime(hotel.check_out_time)}`}
        </div>
        <div className="font-bold text-lg">{hotel.title}</div>
        {hotel.content && <div className="pt-2.5">{hotel.content}</div>}
      </div>
    </li>
  );
};

export default HotelCard;

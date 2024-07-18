import { TripsType } from "@/types/trips";

interface TripCardType {
  trip: TripsType;
}

const TripCard = ({ trip }: TripCardType) => {
  return (
    <li className="flex">
      <div className="w-[150px] pr-[50px] font-bold mt-2.5 text-right tripCard-date relative h-fit">
        {trip.date}
      </div>
      <div className="px-5 py-2 rounded bg-[#D4F1F4] grow shadow-md">
        <div className="text-sm text-[#636363]">時間: {trip.date}</div>
        <div className="font-bold text-lg">{trip.title}</div>
        {trip.content && <div className="pt-2.5">{trip.content}</div>}
      </div>
    </li>
  );
};

export default TripCard;

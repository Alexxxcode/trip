import { v4 as uuidv4 } from "uuid";
import { TimelineType } from "@/types/trips";
import ScheduleCard from "./ScheduleCard";
import HotelCard from "./HotelCard";

interface TripContainerType {
  data: TimelineType;
}

const TripContainer = ({ data }: TripContainerType) => {
  return (
    <div>
      <h2 className="w-[150px] px-5 py-2 bg-[var(--primary)] text-white rounded text-center">
        {data.date}
      </h2>
      <ul className="grid gap-y-5 pt-5">
        {data.trips.schedules?.map((schedule) => (
          <ScheduleCard key={uuidv4()} schedule={schedule} />
        ))}
      </ul>
      <ul className="grid gap-y-5 pt-5">
        {data.trips.hotels?.map((hotel) => (
          <HotelCard key={uuidv4()} hotel={hotel} />
        ))}
      </ul>
    </div>
  );
};

export default TripContainer;

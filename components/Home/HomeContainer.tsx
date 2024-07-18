import useTrip from "@/hooks/useTrip";
import { uuid } from "uuidv4";
import TripCard from "../Trip/TripCard";

const HomeContainer = () => {
  const { trips, isLoading } = useTrip();
  return (
    <main className="w-[700px] min-h-screen md:min-h-[600px] rounded-md bg-white p-5 shadow-md">
      {isLoading ? (
        "loading..."
      ) : (
        <ul className="timeline-container grid gap-y-5">
          {trips.map((trip) => (
            <TripCard key={uuid()} trip={trip} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default HomeContainer;

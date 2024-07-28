import useTrip from "@/hooks/useTrip";
import { v4 as uuidv4 } from "uuid";
import TripContainer from "@/components/Trip/TripContainer";

const HomeContainer = () => {
  const { trips, isLoading } = useTrip();

  return (
    <div>
      {isLoading ? (
        <p className="text-lg text-center">loading...</p>
      ) : (
        <div className="grid gap-y-5">
          {trips.map((trip) => (
            <TripContainer key={uuidv4()} data={trip} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeContainer;

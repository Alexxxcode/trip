import useTrip from "@/hooks/useTrip";
import { v4 as uuidv4 } from "uuid";
import TripContainer from "@/components/Trip/TripContainer";

const HomeContainer = () => {
  const { trips, isLoading } = useTrip();

  return (
    <main className="w-[700px] min-h-screen md:min-h-[600px] rounded-md bg-white p-5 shadow-md">
      {isLoading ? (
        "loading..."
      ) : (
        <div className="grid gap-y-5">
          {trips.map((trip) => (
            <TripContainer key={uuidv4()} data={trip} />
          ))}
        </div>
      )}
    </main>
  );
};

export default HomeContainer;

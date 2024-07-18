import { useQuery } from "@tanstack/react-query";
import { getTrips } from "@/api";
import { TripsType } from "@/types/trips";

const useTrip = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getTrips"],
    queryFn: getTrips,
    initialData: [],
  });

  return { trips: data, isLoading };
};

export default useTrip;

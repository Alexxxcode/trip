import { useQuery } from "@tanstack/react-query";
import { getTripsTimeline } from "@/api";
import { TimelineType } from "@/types/trips";

const useTrip = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getTripsTimeline"],
    queryFn: async () => {
      const res = await getTripsTimeline();
      const array: TimelineType[] = Object.keys(res).map((key) => ({
        date: key,
        // @ts-ignore: Unreachable code error
        trips: res[key],
      }));

      return array;
    },
    initialData: [],
  });

  return { trips: data, isLoading };
};

export default useTrip;

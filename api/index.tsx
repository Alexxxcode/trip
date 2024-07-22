import { GetTripsTimelineRes } from "@/types/trips";

const getTripsTimeline = async (): Promise<GetTripsTimelineRes[]> => {
  const response = await fetch(
    "https://ignatius.df.r.appspot.com/api/schedules/timeline"
  );
  const data = await response.json();
  return data;
};

export { getTripsTimeline };

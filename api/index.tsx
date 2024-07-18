import { TripsType } from "@/types/trips";

const getTrips = async (): Promise<TripsType[]> => {
  const response = await fetch(
    "https://ignatius.df.r.appspot.com/api/schedules"
  );
  const data = await response.json();
  return data;
};

export { getTrips };

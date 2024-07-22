interface ScheduleType {
  id: number;
  order: number;
  date: string;
  created_at?: string;
  updated_at?: string;
  start_time?: string;
  end_time?: string;
  title: string;
  content: string;
  type: number;
  latitude?: number;
  longitude?: number;
}

interface HotelType {
  id: number;
  title: string;
  content?: string;
  latitude?: number;
  longitude?: number;
  created_at: string;
  updated_at: string;
  check_in_time: string;
  check_out_time: string;
}

interface TripsType {
  schedules: ScheduleType[];
  hotels: HotelType[];
}

interface TimelineType {
  date: string;
  trips: TripsType;
}

interface GetTripsTimelineRes {
  [key: string]: TripsType;
}

export type {
  ScheduleType,
  HotelType,
  TimelineType,
  GetTripsTimelineRes,
  TripsType,
};

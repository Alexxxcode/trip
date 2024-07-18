interface TripsType {
  id: number;
  order: number;
  date: string;
  created_at?: string;
  start_time?: string;
  updated_at?: string;
  title: string;
  content: string;
  type: number;
  latitude?: number;
  longitude?: number;
}

export type { TripsType };

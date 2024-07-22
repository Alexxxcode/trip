import { ScheduleType } from "@/types/trips";
import { getTime } from "@/utils";

interface ScheduleCardType {
  schedule: ScheduleType;
}

const ScheduleCard = ({ schedule }: ScheduleCardType) => {
  return (
    <li className="md:flex relative">
      <div className="px-5 py-2 rounded bg-[#acd5e9] grow shadow-md">
        <div className="text-sm text-[#232323]">
          時間: {schedule.start_time ? getTime(schedule.start_time) : " --- "}
        </div>
        <div className="font-bold text-lg">{schedule.title}</div>
        {schedule.content && <div className="pt-2.5">{schedule.content}</div>}
      </div>
    </li>
  );
};

export default ScheduleCard;

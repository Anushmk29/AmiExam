import React from "react";
import UploadCSV from "./uploadForm";
import { Calendar, Gift, MessageSquare } from "lucide-react";
import ScheduleTestCard from "./scheduleTestCard";
const FeatureGrid = () => {
  return (
    <div className="w-full mx-auto p-4 mt-5">
      <div className="w-full grid grid-cols-4 grid-rows-2 gap-4">
        <div className="border-[1.5px] border-grey-800 h-4/5 p-4 rounded-lg col-span-2 row-span-2 flex flex-col shadow-md">
          <h1 className="text-emerald-500 text-center pb-2 font-bold text-2xl">
            SCHEDULE TEST
          </h1>
          <ScheduleTestCard></ScheduleTestCard>
        </div>

        {/* Scheduling Card */}
        <div className="border-[1.5px] border-grey-900 p-4 rounded-lg col-span-2 row-span-1 flex flex-col shadow-md">
          <h1 className="text-emerald-500 text-center pb-2 font-bold text-2xl">
            ADD QUESTIONS
          </h1>
          <UploadCSV></UploadCSV>
        </div>

        {/* Wallet Card */}
        <div className="border-[1.5px] border-grey-500 p-4 rounded-lg col-span-1 row-span-1 flex flex-col shadow-md">
          <h2 className="text-emerald-500 text-center pb-2 font-bold text-2xl">
            ALL TESTS
          </h2>

          <button className="w-full bg-emerald-700 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg">
            View All Tests
          </button>
        </div>

        {/* Inbox Card */}
        <div className="border-[1.5px] border-grey-500 p-4 rounded-lg col-span-1 row-span-1 flex flex-col shadow-md">
          <h2 className="text-emerald-500 text-center pb-2 font-bold text-2xl">
            TOP SCORERS
          </h2>
          <button className="w-full bg-emerald-700 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg">
            View Top Scorers
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;

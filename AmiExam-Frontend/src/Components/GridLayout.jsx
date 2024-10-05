import React from "react";
import { Calendar, Gift, MessageSquare } from "lucide-react";
const FeatureGrid = () => {
  return (
    <div className="w-full h-screen  mx-auto p-4">
      <div className="w-full h-full grid grid-cols-4 grid-rows-3 gap-4">
        {/* Customization Card */}
        <div className="bg-purple-200 h-4/5 p-4 rounded-lg col-span-2 row-span-3 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Customization</h2>

          <p className="text-sm">
            Use a pre-designed template or personalize with video, stickers,
            fonts, and more
          </p>
        </div>

        {/* Scheduling Card */}
        <div className="bg-pink-200 p-4 rounded-lg col-span-2 row-span-1 flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Scheduling</h2>
          <p className="mb-4 text-sm flex-grow">
            Schedule all your cards and gifts now and we'll send them later
          </p>
          <div className="flex items-end space-x-2 h-1/2">
            <div className="bg-green-300 w-1/3 rounded-lg"></div>
          </div>
        </div>

        {/* Wallet Card */}
        <div className="bg-green-200 p-4 rounded-lg col-span-1 row-span-1 flex flex-col">
          <h2 className="text-xl font-bold mb-2">Wallet</h2>

          <p className="text-xs">
            Access all your gifts and save up your Givngli Cash
          </p>
        </div>

        {/* Inbox Card */}
        <div className="bg-yellow-200 p-4 rounded-lg col-span-1 row-span-1 flex flex-col">
          <h2 className="text-xl font-bold mb-2">Inbox</h2>
          <p className="mb-2 text-xs">
            Track your gifts, group chats, and sent cards
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;

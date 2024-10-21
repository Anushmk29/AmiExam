import React, { useState } from "react";

const ScheduleTestCard = () => {
  const [testName, setTestName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the test scheduling logic here
    console.log({ testName, date, time, duration });
    // You can also make an API call to save the test
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="w-full p-4 border-[1.5px] border-grey-500 bg-white rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            className="text-emerald-700 font-bold mb-2 pr-2"
            htmlFor="testName"
          >
            Test Name :
          </label>
          <input
            type="text"
            id="testName"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="mb-4">
          <label
            className="text-emerald-700 font-bold mb-2 pr-2"
            htmlFor="date"
          >
            Date :
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="mb-4">
          <label
            className="text-emerald-700 font-bold mb-2 pr-2"
            htmlFor="time"
          >
            Time :
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="mb-4">
          <label
            className="text-emerald-700 font-bold mb-2 pr-2"
            htmlFor="duration"
          >
            Duration (in minutes) :
          </label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-700 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg"
        >
          Schedule Test
        </button>
      </form>
    </div>
  );
};

export default ScheduleTestCard;

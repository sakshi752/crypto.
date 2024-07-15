import React from 'react';

const SelectDays = () => {
  return (
    <div className="flex flex-row items-center gap-5 p-4  dark:bg-gray-800">
      <h1 className="text-lg text-gray-900 dark:text-gray-100 font-semibold">
        Price Change in last
      </h1>
      <select
        name="days"
        id="days"
        className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#7a4191] focus:border-[#7a4191]"
      >
        <option value="7" className="text-gray-900 dark:text-gray-100">
          7 Days
        </option>
        <option value="30" className="text-gray-900 dark:text-gray-100">
          30 Days
        </option>
        <option value="60" className="text-gray-900 dark:text-gray-100">
          60 Days
        </option>
        <option value="120" className="text-gray-900 dark:text-gray-100">
          120 Days
        </option>
      </select>
    </div>
  );
}

export default SelectDays;

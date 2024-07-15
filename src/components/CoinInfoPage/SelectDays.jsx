import React from 'react';

const SelectDays = ({ handleDaysChange, days }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 p-4  dark:bg-gray-800 rounded-lg">
      <h1 className="text-lg text-gray-900 dark:text-gray-100 font-semibold">
        Price Change in last
      </h1>
      <select
        name="days"
        id="days"
        value={days}
        onChange={handleDaysChange}
        className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
};

export default SelectDays;

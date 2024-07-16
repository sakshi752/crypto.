import React, { useState } from 'react'

const SelectCoins = ({coins}) => {
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("ethereum");

    const handleCoinChange=(e)=>{
        setCrypto1(e.target.value)
    }
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 p-4  rounded-lg">
            <select
                name="crypto1"
                id="crypto1"
                label="Crypto 1"
                value={crypto1}
                onChange={handleCoinChange}
                className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
                {coins.map((coin)=>(
                    <option value="7" className="text-gray-900 dark:text-gray-100">
                    7 Days
                </option>
                ))}
                
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
            {/* <select
                name="days"
                id="days"
                value={crypto2}
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
            </select> */}
        </div>
    )
}

export default SelectCoins

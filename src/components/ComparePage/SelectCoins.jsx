import React, { useState } from 'react'

const SelectCoins = ({ coins }) => {
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("ethereum");
    const handleCoinChange = (e, isCoin2) => {
        if (isCoin2) {
            setCrypto2(e.target.value);
        }
        else {
            setCrypto1(e.target.value);
        }
        // console.log(e.target.value);/
    }
    return (
        <div className="flex cursor-pointer dark:bg-gray-800 bg-gray-300 px-5 py-4 rounded-lg shadow-lg transform transition duration-500 gap-1">
            <div className='flex flex-row items-center gap-3 md:w-[20%]'>
                <p className='text-black dark:text-white hidden md:block'>Crypto 1</p>
                <select
                    name="crypto1"
                    id="crypto1"
                    label="Crypto 1"
                    value={crypto1}
                    onChange={(e) => handleCoinChange(e, false)}
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-1/2"
                >
                    {coins.map((coin) => (
                        <option key={coin.id} value={coin.id} className="text-gray-900 dark:text-gray-100">
                            {coin.name}
                        </option>
                    ))}


                </select>
            </div>
            <div className='flex flex-row items-center gap-3 md:w-[20%]'>
                <p className='text-black dark:text-white hidden md:block'>Crypto 2</p>
                <select
                    name="crypto1"
                    id="crypto1"
                    label="Crypto 1"
                    value={crypto2}
                    onChange={(e) => handleCoinChange(e, true)}
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-1/2"
                >
                    {coins.map((coin) => (
                        <option key={coin.id} value={coin.id} className="text-gray-900 dark:text-gray-100">
                            {coin.name}
                        </option>
                    ))}


                </select>
            </div>
        </div>
    )
}

export default SelectCoins

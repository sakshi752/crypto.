import React, { useState } from 'react'

const SelectCoins = ({ coins }) => {
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("ethereum");
    const handleCoinChange = (e) => {
        setCrypto1(e.target.value);
        console.log(e.target.value);
    }
    return (
        <div className="flex items-center cursor-pointer dark:bg-gray-800 bg-gray-300 px-5 py-4 rounded-lg shadow-lg transform transition duration-500 gap-1">
            <div className='flex items-center gap-5'>
                <p className='text-black dark:text-white'>Crypto 1</p>
                <select
                    name="crypto1"
                    id="crypto1"
                    label="Crypto 1"
                    value={crypto1}
                    onChange={handleCoinChange}
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-[40%]"
                >
                    {coins.map((coin) => (
                        <option key={coin.id} value={coin.id} className="text-gray-900 dark:text-gray-100">
                            {coin.name}
                        </option>
                    ))}


                </select>
            </div>
            <div className='flex items-center gap-5'>
                <p className='text-black dark:text-white'>Crypto 2</p>
                <select
                    name="crypto1"
                    id="crypto1"
                    label="Crypto 1"
                    value={crypto1}
                    onChange={handleCoinChange}
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-[40%]"
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

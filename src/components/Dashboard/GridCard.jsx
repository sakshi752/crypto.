import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const GridCard = ({coin}) => {
    return (
        <Link to={`/coin/${coin.id}`}>
            <div
                className={` dark:bg-gray-800 bg-gray-300 px-5 py-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 ${coin.price_change_percentage_24h > 0 ? "hover:border-green-500" : "hover:border-red-500"} hover:border-2 cursor-pointer flex flex-col gap-4 justify-evenly`}>
                <div className='flex items-center mb-4'>
                    <img src={coin.image} alt={coin.name} draggable="false" className='h-[3rem] w-[3rem] rounded-full mr-4' />
                    <div>
                        <p className='text-gray-400 uppercase'>{coin.symbol}</p>
                        <p className='dark:text-white text-lg font-semibold'>{coin.name}</p>
                    </div>
                </div>
                {coin.price_change_percentage_24h > 0 ? (
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-5'>
                            <p className='text-green-500 border-2 border-green-500 px-5 py-2 text-lg font-semibold rounded-full hover:bg-green-500 hover:text-white'>+{coin.price_change_percentage_24h.toFixed(2)}%</p>
                            <p className='text-green-500 border-2 border-green-500 p-3 text-lg font-semibold rounded-full hover:bg-green-500 hover:text-white'><FaArrowTrendUp /></p>
                        </div>
                        <p className='text-lg font-bold text-green-500'>${coin.current_price}</p>
                    </div>) : (
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-5'>
                            <p className='text-red-500 border-2 border-red-500 px-5 py-2 text-lg font-semibold rounded-full hover:bg-red-500 hover:text-white'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                            <p className='text-red-500 border-2 border-red-500 p-3 text-lg font-semibold rounded-full hover:bg-red-500 hover:text-white'><FaArrowTrendDown /></p>
                        </div>
                        <p className='text-lg font-bold text-red-500'>${coin.current_price}</p>
                    </div>
                )}
                <div>
                    <p className='text-gray-700 dark:text-gray-400 text-sm'>Total Volume : ${coin.total_volume.toLocaleString()}</p>
                    <p className='text-gray-700 dark:text-gray-400 text-sm'>Market Cap : ${coin.market_cap.toLocaleString()}</p>
                </div>
            </div>
        </Link>
    )
}

export default GridCard

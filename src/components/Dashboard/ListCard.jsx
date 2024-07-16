import React from 'react'
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import convertNumbers from '../../functions/convertFunction';
import { Link } from 'react-router-dom';


const ListCard = ({ coin }) => {
    return (
        <Link to={`/coin/${coin.id}`}>
            <div
                key={coin.id}
                className={`flex items-center justify-between cursor-pointer dark:bg-gray-800 bg-gray-300 px-5 py-4 rounded-lg shadow-lg transform transition duration-500 md:hover:scale-105 hover:border-2 ${coin.price_change_percentage_24h > 0 ? "hover:border-green-500" : "hover:border-red-500"
                    }`}
            >
                {/* Image */}
                <div className='w-[2rem] md:w-[3rem] lg:w-[4rem] lg:mr-[.5rem]'>
                    <img src={coin.image} alt="" className='w-[2rem] md:w-[3rem] lg:w-[4rem] rounded-full' />
                </div>
                {/* Title and Symbol */}
                <div className='w-[10%]'>
                    <h1 className='text-gray-400 uppercase'>{coin.symbol}</h1>
                    <h1 className='dark:text-white text-sm lg:text-lg font-semibold'>{coin.name}</h1>
                </div>
                {/* Extras */}
                <div className='w-[18%] flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        {coin.price_change_percentage_24h > 0 ? (
                            <>
                                <p className='text-green-500 border-2 border-green-500 p-1 md:px-5 md:py-2 text-sm md:text-lg font-semibold rounded-full hover:bg-green-500 hover:text-white'>
                                    +{coin.price_change_percentage_24h.toFixed(2)}%
                                </p>
                                <p className='text-green-500 border-2 border-green-500 p-3 text-lg font-semibold rounded-full hover:bg-green-500 hover:text-white hidden md:block'>
                                    <FaArrowTrendUp />
                                </p>
                            </>
                        ) : (
                            <>
                                <p className='text-red-500 border-2 border-red-500 p-1 md:px-5 md:py-2 text-sm md:text-lg font-semibold rounded-full hover:bg-red-500 hover:text-white'>
                                    +{coin.price_change_percentage_24h.toFixed(2)}%
                                </p>
                                <p className='text-red-500 border-2 border-red-500 p-3 text-lg font-semibold rounded-full hover:bg-red-500 hover:text-white hidden md:block'>
                                    <FaArrowTrendDown />
                                </p>
                            </>
                        )}
                    </div>
                    <div className=''>
                        {coin.price_change_percentage_24h > 0 ? (
                            <p className='text-xs md:text-lg font-bold text-green-500'>${coin.current_price}</p>
                        ) : (
                            <p className='text-sm md:text-lg font-bold text-red-500'>${coin.current_price}</p>
                        )}
                    </div>
                </div>
                {/* Total Volume */}
                <div className='w-[18%]'>
                    <p className='text-gray-500 text-sm md:text-[1.2rem]'>
                        ${convertNumbers(coin.total_volume)}
                    </p>
                </div>
                {/* Market Cap */}
                <div className='w-[15%] hidden lg:block'>
                    <p className='text-gray-500 text-[1.2rem]'>${convertNumbers(coin.market_cap)}</p>
                </div>
            </div>
        </Link>
    )
}

export default ListCard

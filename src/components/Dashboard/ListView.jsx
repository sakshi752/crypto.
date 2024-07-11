import React from 'react';
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const ListView = ({ coins }) => {
  return (
    <div className='flex flex-col gap-5 p-1 md:p-4 py-10 w-[100%]  md:w-[90%] mx-auto'>
      {coins.map((coin) => (
        <div
          key={coin.id}
          className={`flex md:gap-[1rem] justify-between items-center py-4 px-2 md:p-4  rounded-lg dark:hover:bg-gray-950 hover:bg-gray-200 cursor-pointer transition duration-200 ${coin.price_change_percentage_24h > 0 ? "hover:border-green-500 hover:border-2" : "hover:border-red-500 hover:border-2"}`}
        >
          <div className='flex items-center'>
            <img src={coin.image} alt="" className='h-[3rem] w-[3rem] rounded-full' />
          </div>

          <div>
            <p className='text-gray-400 uppercase'>{coin.symbol}</p>
            <p className='dark:text-white text-lg font-semibold'>{coin.name}</p>
          </div>

          {coin.price_change_percentage_24h > 0 ? (
            <div className='flex items-center gap-5'>
              <p className='text-green-500 border-2 border-green-500 px-5 py-2 text-lg font-semibold rounded-full hover:bg-green-500 hover:text-white'>+{coin.price_change_percentage_24h.toFixed(2)}%</p>
              <p className='text-green-500 border-2 border-green-500 p-3 text-lg font-semibold rounded-full hover:bg-green-500 hover:text-white hidden md:block'><FaArrowTrendUp /></p>
            </div>
          ) : (
            <div className='flex items-center gap-5'>
              <p className='text-red-500 border-2 border-red-500 px-5 py-2 text-lg font-semibold rounded-full hover:bg-red-500 hover:text-white'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
              <p className='text-red-500 border-2 border-red-500 p-3 text-lg font-semibold rounded-full hover:bg-red-500 hover:text-white hidden md:block'><FaArrowTrendDown /></p>
            </div>
          )}

          {coin.price_change_percentage_24h > 0 ? (
            <p className='text-lg font-bold text-green-500'>${coin.current_price}</p>
          ) : (
            <p className='text-lg font-bold text-red-500'>${coin.current_price}</p>
          )}

          <div>
            <p className='text-lg text-black dark:text-white'>${coin.total_volume.toLocaleString()}</p>
          </div>

          <div>
            <p className=' text-lg text-black dark:text-white hidden md:block'>${coin.market_cap.toLocaleString()}</p>
          </div>

        </div>
      ))
      }
    </div >
  )
}

export default ListView;

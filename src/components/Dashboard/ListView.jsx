import React from 'react';
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const ListView = ({ coins }) => {
  return (
    <div className='flex flex-col gap-5 p-4 py-10 w-[85%] mx-auto'>
      {coins.map((coin) => (
        <div
          key={coin.id}
          className='flex justify-between items-center p-4  rounded-lg transition-colors duration-200 dark:hover:bg-gray-800 hover:bg-gray-200'
        >
          <div className='flex items-center w-1/3'>
            <img src={coin.image} alt="" className='h-[3rem] w-[3rem] rounded-full mr-4' />
            <div>
              <p className='text-gray-400 uppercase'>{coin.symbol}</p>
              <p className='dark:text-white text-lg font-semibold'>{coin.name}</p>
            </div>
          </div>
          {coin.price_change_percentage_24h > 0 ? (
            <div className='flex items-center gap-14 w-1/3'>
              <div className='flex items-center gap-5'>
                <p className='text-green-500 border-2 border-green-500 px-5 py-2 text-lg font-semibold rounded-full hover:bg-green-500 hover:text-white'>+{coin.price_change_percentage_24h.toFixed(2)}%</p>
                <p className='text-green-500 border-2 border-green-500 p-3 text-lg font-semibold rounded-full hover:bg-green-500 hover:text-white'><FaArrowTrendUp /></p>
              </div>
              <p className='text-lg font-bold text-green-500'>${coin.current_price}</p>
            </div>) : (
            <div className='flex items-center gap-14 w-1/3'>
              <div className='flex items-center gap-5'>
                <p className='text-red-500 border-2 border-red-500 px-5 py-2 text-lg font-semibold rounded-full hover:bg-red-500 hover:text-white'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                <p className='text-red-500 border-2 border-red-500 p-3 text-lg font-semibold rounded-full hover:bg-red-500 hover:text-white'><FaArrowTrendDown /></p>
              </div>
              <p className='text-lg font-bold text-red-500'>${coin.current_price}</p>
            </div>
          )}
          <div className='w-1/3 flex justify-between items-center'>
            <p className='text-lg text-black dark:text-white'>${coin.total_volume.toLocaleString()}</p>
            <p className=' text-lg text-black dark:text-white'>${coin.market_cap.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListView;

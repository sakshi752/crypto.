import React from 'react';
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const ListView = ({ coins }) => {
  return (
    <div className='w-[] md:w-[90%] mx-auto flex flex-col gap-5 py-10'>
      {coins.map((coin) => {
        return (
          <div key={coin.id} className={`flex items-center justify-between  cursor-pointer dark:bg-gray-800 bg-gray-300 px-5 py-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:border-2 ${coin.price_change_percentage_24h > 0 ? "hover:border-green-500" : "hover:border-red-500"}`}>
            {/* image */}
            <div className='w-[2rem] lg:w-[3rem] lg:mr-[.5rem]'>
              <img src={coin.image} alt="" className='w-[2rem] lg:w-[3rem] rounded-full' />
            </div>
            {/* title and symbol */}
            <div className='w-[10%]'>
              <h1 className='text-gray-400 uppercase'>{coin.symbol}</h1>
              <h1 className='dark:text-white text-sm lg:text-lg font-semibold'>{coin.name}</h1>
            </div>
            {/* extras */}
            <div className='w-[18%] flex'>
              {coin.price_change_percentage_24h > 0 ? (
                <>
                  <p className='text-green-500 border-2 border-green-500 px-5 py-2 text-lg font-semibold rounded-full hover:bg-green-500 hover:text-white'>+{coin.price_change_percentage_24h.toFixed(2)}%</p>
                  <p className='text-green-500 border-2 border-green-500 p-3 text-lg font-semibold rounded-full hover:bg-green-500 hover:text-white hidden md:block'><FaArrowTrendUp /></p>
                </>

              ) : (
                <>
                  <p className='text-red-500 border-2 border-red-500 px-5 py-2 text-lg font-semibold rounded-full hover:bg-red-500 hover:text-white'>+{coin.price_change_percentage_24h.toFixed(2)}%</p>
                  <p className='text-red-500 border-2 border-red-500 p-3 text-lg font-semibold rounded-full hover:bg-red-500 hover:text-white hidden md:block'><FaArrowTrendDown /></p>
                </>
              )}

            </div>
            <div className='w-[18%]'>
              {coin.price_change_percentage_24h > 0 ? (
                <p className='text-lg font-bold text-green-500'>${coin.current_price}</p>
              ) : (
                <p className='text-lg font-bold text-red-500'>${coin.current_price}</p>
              )}

            </div>
            {/* total vol */}
            <div className='w-[15%]'>
              <p className='text-gray-500 text-[1rem]'>${coin.total_volume.toLocaleString()}</p>
            </div>
            {/* total cap */}
            <div className='lg:w-[15%] hidden lg:block'>
              <p className='text-gray-500 text-[1rem]'>${coin.market_cap.toLocaleString()}</p>
            </div>
          </div>
        )

      })}
    </div>
  );
}

export default ListView;

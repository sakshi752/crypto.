import React from 'react';
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const GridView = ({ coins }) => {
  return (
    <div className='flex justify-center items-center p-4 py-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {coins.map(coin => (
          <div key={coin.id} className='h-[300px] w-[300px] dark:bg-gray-800 bg-gray-900 px-5 py-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer flex flex-col gap-4 justify-evenly'>
            <div className='flex items-center mb-4'>
              <img src={coin.image} alt={coin.name} draggable="false" className='h-[3rem] w-[3rem] rounded-full mr-4' />
              <div>
                <p className='text-gray-400 uppercase'>{coin.symbol}</p>
                <p className='text-white text-lg font-semibold'>{coin.name}</p>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-5'>
                <p className='text-green-500 border-2 border-green-500 px-5 py-2 text-lg font-semibold rounded-full hover:bg-green-500 hover:text-white'>+40%</p>
                <p className='text-green-500 border-2 border-green-500 p-3 text-lg font-semibold rounded-full hover:bg-green-500 hover:text-white'><FaArrowTrendDown /></p>
              </div>
              <p className='text-lg font-bold text-green-500'>$58,509</p>
            </div>
            <div>
              <p className='text-gray-400 text-sm'>Total Volume : $25,029,121,469</p>
              <p className='text-gray-400 text-sm'>Market Cap : $1,154,309,811,139</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GridView

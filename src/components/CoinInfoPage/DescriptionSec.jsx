import React, { useState } from 'react'

const DescriptionSec = ({ desc }) => {
    const [readMore,setReadMore]=useState(false);
    
    return (
        <div className={`flex flex-col justify-between gap-3 cursor-pointer dark:bg-gray-800 bg-gray-300 dark:text-white px-5 py-4 rounded-lg shadow-lg`}>
            <h1 className='text-lg font-semibold'>Coin Description</h1>
            <p>{desc}</p>
            <button className='w-[10%] text-lg text-gray-400'>]
            {readMore ? "Read less..." : "Read more..."}
            </button>
        </div>
    )
}

export default DescriptionSec

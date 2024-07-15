import React from 'react'

const ToggleComponent = () => {
    return (
        <div className='flex md:items-center justify-start md:justify-center gap-1'>
            <button className='text-[#7a4191] bg-[#7a4191] bg-opacity-15 border border-[#7a4191] px-3 py-2 rounded-sm text-lg'>Price</button>
            <button className='text-[#7a4191] bg-[#7a4191] bg-opacity-15 border border-[#7a4191] px-3 py-2 rounded-sm text-lg'>MKT CAP</button>
            <button className='text-[#7a4191] bg-[#7a4191] bg-opacity-15 border border-[#7a4191] px-3 py-2 rounded-sm text-lg'>VOLUME</button>
        </div>
    )
}

export default ToggleComponent

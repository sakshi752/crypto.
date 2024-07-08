import React from 'react';
import iphone from '../../assets/iphone.png';

const LandingPage = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start justify-between py-[1.5rem] px-[3rem]'>
      {/* info */}
      <div>
        <div className='flex flex-col '>
          <h1 className='text-[6rem] font-bold dark:text-white transition-all'>
            Track Crypto
          </h1>
          <h1 className='text-[6rem] font-bold text-[#7a4191]'>Real Time.</h1>
        </div>

      </div>
      {/* image */}
      <div>
        <img src={iphone} alt="" />
      </div>
    </div>
  );
};

export default LandingPage;

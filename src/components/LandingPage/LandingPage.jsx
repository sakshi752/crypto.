import React from 'react';
import iphone from '../../assets/iphone.png';

const LandingPage = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start justify-between py-12 px-12 transition-all'>
      {/* info */}
      <div className='flex-1'>
        <div className='flex flex-col mb-6 gap-10'>
          <h1 className='text-6xl md:text-[6.7rem] font-bold dark:text-white transition-all'>
            Track Crypto
          </h1>
          <h1 className='text-6xl md:text-8xl font-semibold text-[#7a4191]'>
            Real Time.
          </h1>
        </div>
        <div className='flex flex-col items-start gap-5'>
          <p className='text-gray-700 dark:text-gray-300 text-lg'>
            Track crypto through a public API in real time. Visit the dashboard to do so!
          </p>
          <a
            href="/dashboard"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#7a4191] to-[#1E3A8A] text-white rounded-md hover:from-[#6d3791] hover:to-[#162e6a] transition-colors"
          >
            Dashboard
          </a>
        </div>
      </div>
      {/* image */}
      <div className='flex-1 flex justify-center items-center'>
        <img src={iphone} alt="iPhone displaying crypto app" className='w-3/4 md:w-full max-w-md ' />
      </div>
    </div>
  );
};

export default LandingPage;

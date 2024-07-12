import React from 'react';
import iphone from '../../assets/iphone.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const HeroSection = () => {
    return (
        <div className='flex flex-col md:flex-row items-center md:items-start justify-between py-6 md:py-12 md:pt-16 px-4 sm:px-10 lg:px-20 gap-10 lg:gap-0'>
            {/* info */}
            <div className='flex-1'>
                <div className='flex flex-col items-center md:items-start mb-6 gap-5 md:gap-10'>
                    <motion.h1
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 1 }}
                        transition={{ duration: .5 }}
                        className='text-5xl sm:text-6xl md:text-[3.1rem] lg:text-[5.5rem] font-bold dark:text-white '>
                        Track Crypto
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 1 }}
                        transition={{ duration: .5 }}
                        className='text-5xl sm:text-6xl md:text-[3.5rem] lg:text-[5.5rem] font-bold text-[#7a4191]'>
                        Real Time.
                    </motion.h1>
                </div>
                <div className='flex flex-col items-center md:items-start gap-5'>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 1 }}
                        transition={{ duration: .5 }}
                        className='text-gray-700 dark:text-gray-300 text-sm lg:text-lg text-center md:text-left'>
                        Track crypto through a public API in real time. Visit the dashboard to do so!
                    </motion.p>
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        className="inline-block px-4 py-2 bg-gradient-to-r from-[#7a4191] to-[#1E3A8A] text-white rounded-md hover:from-[#6d3791] hover:to-[#162e6a] transition-colors"
                    >
                        <Link to="/dashboard">
                            Dashboard
                        </Link>
                    </motion.button>
                </div>
            </div>
            {/* image */}
            <div className='flex-1 flex justify-center items-end'>
                <motion.img src={iphone}
                    alt="iPhone displaying crypto app" className='w-3/4  md:w-full max-w-md '
                    initial={{ y: -20 }}
                    animate={{ y: 20 }}
                    transition={{
                        type: "smooth",
                        repeatType: "mirror",
                        duration: 1.7,
                        repeat: Infinity
                    }}
                />
            </div>
        </div>
    )
}

export default HeroSection

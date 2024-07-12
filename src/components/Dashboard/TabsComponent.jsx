import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridView from './GridView';
import ListView from './ListView'

const TabsComponent = ({ coins,handlePageChange }) => {
    const [tab, setTab] = useState('grid');

    const handleClick = (newTab) => {
        handlePageChange(1)
        setTab(newTab);
    };


    return (
        <div>
            <div className='flex w-full mt-10'>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className={`w-1/2 pb-5 ${tab === 'grid' ? "text-[#7a4191] border-b-[3px] border-[#7a4191]" : "dark:text-white"} font-semibold text-xl`}
                    onClick={() => handleClick('grid')}
                >
                    Grid View
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className={`w-1/2 pb-5 ${tab === 'list' ? "text-[#7a4191] border-b-[3px] border-[#7a4191]" : "dark:text-white"} font-semibold text-xl`}
                    onClick={() => handleClick('list')}
                >
                    List View
                </motion.button>
            </div>
            <div>
                {tab==='grid'?(<GridView coins={coins}/>):(<ListView coins={coins}/>)}
            </div>
        </div>

    );
};

export default TabsComponent;

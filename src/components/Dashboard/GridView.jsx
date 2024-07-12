import { motion } from 'framer-motion';
import React from 'react';
import GridCard from './GridCard';

const GridView = ({ coins }) => {
  return (
    <div className='grid grid-cols-1 justify-center items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 w-[85%] md:w-[90%] mx-auto py-10 px-1'>
      {coins.map((coin, index) => (
        <motion.div
          key={coin.id}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { delay: index * 0.2 } }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <GridCard coin={coin}/>
        </motion.div>
      ))}
    </div>
  );
}

export default GridView;

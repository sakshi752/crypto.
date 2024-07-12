import React from 'react';
import ListCard from './ListCard';
import { motion } from 'framer-motion';

const ListView = ({ coins }) => {
  return (
    <div className='w-[97%] md:w-[90%] mx-auto flex flex-col gap-5 py-10 px-1'>
      {coins.map((coin, index) => {
        return (
          <motion.div
            key={coin.id}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, transition: { delay: index * 0.3 } }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <ListCard coin={coin}/>
          </motion.div>

        );
      })}
    </div>
  );
};

export default ListView;

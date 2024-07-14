import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Carousel = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrendingCoins = async () => {
    try {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/search/trending'
      );
      setCoins(data.coins);
      setLoading(false);

    } catch (error) {
      console.error('Error fetching trending coins:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const items = coins.map((coin) => (
    <Link to={`/coin/${coin.item.id}`} key={coin.item.id} className='flex items-center justify-center flex-col'>
      <motion.div
        whileHover={{ scaleX: 1.2 }}
        whileTap={{ scale: 0.7 }}
      >
        <motion.img
          src={coin.item.thumb}
          className='mb-2'
          alt={coin.item.name}
        />
      </motion.div>
      <div className=''>
        <h2 className='text-center text-white font-bold'>{coin.item.name}</h2>
      </div>
    </Link>
  ));

  return (

      <div className='h-[50%] w-[90%] md:w-[70%] m-auto mt-[40px] md:mt-[10px] flex flex-col items-center justify-center p-[20px] gap-3 bg-gradient-to-r from-[#7a4191] to-[#1E3A8A] text-white shadow-lg rounded-lg'>
        <h1 className='text-white mb-6 text-xl font-bold tracking-widest'>Trending Coins</h1>
        {loading ? ( 
          <p className='text-white'>Loading...</p>
        ) : (
          <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls
            responsive={{
              0: { items: 2 },
              512: { items: 3 },
              1024: { items: 5 }
            }}
            autoPlay
            items={items}
          />
        )}
      </div>


  );
};

export default Carousel;

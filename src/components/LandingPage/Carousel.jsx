import { styled } from '@mui/system';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CarouselContainer = styled('div')({
  height: "50%",
  width: "70%",
  margin: "auto",
  marginTop: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  gap: "10px",
  background: "linear-gradient(to right, #7a4191, #1E3A8A)",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",


  '@media (max-width: 768px)': {
    width: "90%",
    marginTop: "40px",
  },
});

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
    <CarouselContainer>
      <h1 className='text-white mb-6 text-xl font-bold tracking-widest'>Trending Coins</h1>
      {loading ? ( // Show loading message while data is being fetched
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
    </CarouselContainer>
  );
};

export default Carousel;

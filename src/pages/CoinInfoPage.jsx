import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/common/Loader';
import { coinObject } from '../functions/coinObject';
import ListCard from '../components/Dashboard/ListCard';
import DescriptionSec from '../components/CoinInfoPage/DescriptionSec';
import getCoinData from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';

const CoinInfoPage = () => {
  const { id } = useParams();
  const [coinInfo, setCoinInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);

 

  useEffect(() => {
    if (id) {
      fetchCoinInfo();
    }
  }, [id]);

  const fetchCoinInfo = async () => {
    const coinData = await getCoinData(id);
    if (coinData) {
      coinObject(setCoinInfo, coinData);
      const prices = await getCoinPrices(id);
      if (prices) {
        setLoading(false)
      } 
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='w-[97%] md:w-[94%] mx-auto flex flex-col gap-5 py-5 px-1'>
          <ListCard coin={coinInfo} />
          <DescriptionSec desc={coinInfo.desc} name={coinInfo.name} />
        </div>
      )}
    </>
  );
};

export default CoinInfoPage;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/common/Loader';
import { coinObject } from '../functions/coinObject';
import ListCard from '../components/Dashboard/ListCard';
import DescriptionSec from '../components/CoinInfoPage/DescriptionSec';
import getCoinData from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/CoinInfoPage/LineChart';
import convertDate from '../functions/convertDate';

const CoinInfoPage = () => {
  const { id } = useParams();
  const [coinInfo, setCoinInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    if (id) {
      fetchCoinInfo();
    }
  }, [id]);

  const fetchCoinInfo = async () => {
    try {
      const coinData = await getCoinData(id);
      if (coinData) {
        coinObject(setCoinInfo, coinData);
        const prices = await getCoinPrices(id, days);
        if (prices) {
          setChartData({
            labels: prices.map(price => convertDate(price[0])),
            datasets: [
              {
                label: 'Price',
                data: prices.map(price => price[1]),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.5)',
                fill: true,
                tension: 0.3,
                borderWidth: 2,
                pointRadius: 0
              }]
          });
          setLoading(false);
        }
      }
    } catch (error) {
      console.error("Error fetching coin data", error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='w-[97%] md:w-[94%] mx-auto flex flex-col gap-5 py-5 px-1'>
          <ListCard coin={coinInfo} />
          <LineChart chartData={chartData} />
          <DescriptionSec desc={coinInfo.desc} name={coinInfo.name} />
        </div>
      )}
    </>
  );
};

export default CoinInfoPage;

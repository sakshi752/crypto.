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
import SelectDays from '../components/CoinInfoPage/SelectDays';
import ToggleComponent from '../components/CoinInfoPage/ToggleComponent';

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
                borderColor: '#6d3791',
                backgroundColor: '#6d3791',
                fill: true,
                tension: 0.3,
                borderWidth: 2,
                pointRadius: 3
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
          <div className=" dark:bg-gray-800 bg-gray-300 px-5 py-4 rounded-lg shadow-lg flex flex-col gap-10">
            <div className='flex flex-col gap-5'>
              <SelectDays />
              <ToggleComponent />
            </div>
            <LineChart chartData={chartData} />
          </div>
          <DescriptionSec desc={coinInfo.desc} name={coinInfo.name} />
        </div>
      )}
    </>
  );
};

export default CoinInfoPage;

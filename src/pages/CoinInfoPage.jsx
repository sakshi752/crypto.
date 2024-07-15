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
import SelectDays from '../components/CoinInfoPage/SelectDays';
import ToggleComponent from '../components/CoinInfoPage/ToggleComponent';
import settingChartData from '../functions/settingChartData';

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
          settingChartData(setChartData, prices)
          setLoading(false);
        }
        setLoading(false)
      }
    } catch (error) {
      console.error("Error fetching coin data", error);
      setLoading(false);
    }
  };

  const handleDaysChange = async (e) => {
    setLoading(true)
    setDays(e.target.value);
    console.log(e.target.value);
    const prices = await getCoinPrices(id, e.target.value);
    if (prices) {
      settingChartData(setChartData, prices)
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='w-[97%] md:w-[94%] mx-auto flex flex-col gap-5 py-5 px-1'>
          <ListCard coin={coinInfo} />
          <div className=" dark:bg-gray-800 bg-gray-300 px-5 py-4 rounded-lg shadow-lg flex flex-col gap-10">
            <div className='flex flex-col gap-5'>
              <SelectDays handleDaysChange={handleDaysChange} days={days} />
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

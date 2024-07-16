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
  const [priceType, setPriceType] = useState("prices");

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
        const chartVals = await getCoinPrices(id, days,priceType);
        if (chartVals) {
          settingChartData(setChartData, chartVals)
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
    setLoading(true);
    setDays(e.target.value);
    console.log(e.target.value);
    const chartVals = await getCoinPrices(id, e.target.value,priceType);
    if (chartVals) {
      settingChartData(setChartData, chartVals);
      setLoading(false);
    }
  };

  const handlePriceTypeChange =async (newType) => {
    setLoading(true)
    setPriceType(newType);
    console.log(newType);
    const chartVals = await getCoinPrices(id, days,newType);
    if (chartVals) {
      settingChartData(setChartData, chartVals);
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
          <div className="dark:bg-gray-800 bg-gray-300 px-5 py-4 rounded-lg shadow-lg flex flex-col gap-10">
            <div className='flex flex-col gap-5'>
              <SelectDays handleDaysChange={handleDaysChange} days={days} />
              <ToggleComponent priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
            </div>
            <LineChart chartData={chartData} handlePriceTypeChange={handlePriceTypeChange} />
          </div>
          <DescriptionSec desc={coinInfo.desc} name={coinInfo.name} />
        </div>
      )}
    </>
  );
};

export default CoinInfoPage;

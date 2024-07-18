import React, { useEffect, useState } from 'react'
import SelectCoins from '../components/ComparePage/SelectCoins'
import get100Coins from '../functions/get100Coins';
import SelectDays from '../components/CoinInfoPage/SelectDays'
import Loader from '../components/common/Loader'
import getCoinData from '../functions/getCoinData';
import { coinObject } from '../functions/coinObject';
import { getCoinPrices } from '../functions/getCoinPrices';
import settingChartData from '../functions/settingChartData';
import ListCard from '../components/Dashboard/ListCard';

const Compare = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [days, setDays] = useState("30");

  const fetchCoins = async () => {
    try {
      const myCoins = await get100Coins();
      setCoins(myCoins);
      setLoading(false);
    } catch (error) {
      console.log("error:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCoins();
  }, []);
  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    const coinData1 = await getCoinData(crypto1);
    const coinData2 = await getCoinData(crypto2);
    if (coinData1) {
      coinObject(setCrypto1Data, coinData1);
      setLoading(false)
    }
    if (coinData2) {
      coinObject(setCrypto2Data, coinData2)
    }
    if (coinData1 && coinData2) {
      const chartVals1 = await getCoinPrices(crypto1, days, "prices");
      const chartVals2 = await getCoinPrices(crypto2, days, "prices");
      if (chartVals1 && chartVals2) {
        // settingChartData(setChartData, chartVals)
        console.log("crypto1",crypto1Data);
        console.log("prices1", chartVals1);
        console.log("crypto2",crypto2Data);
        console.log("prices2", chartVals2);
        setLoading(false);
      }
    }
  }

  const handleCoinChange = async (e, isCoin2) => {
    if (isCoin2) {
      setCrypto2(e.target.value);
      try {
        const coinData = await getCoinData(e.target.value);
        if (coinData) {
          coinObject(setCrypto2Data, coinData);
          const chartVals = await getCoinPrices(e.target.value, days, "prices");
          if (chartVals) {
            // settingChartData(setChartData, chartVals)
            setLoading(false);
          }
          setLoading(false)
        }
      } catch (error) {
        console.error("Error fetching coin data", error);
        setLoading(false);
      }
    } else {
      setCrypto1(e.target.value);
      try {
        const coinData = await getCoinData(e.target.value);
        if (coinData) {
          coinObject(setCrypto1Data, coinData);
          const chartVals = await getCoinPrices(e.target.value, days, "prices");
          if (chartVals) {
            // settingChartData(setChartData, chartVals)
            setLoading(false);
          }
          setLoading(false)
        }
      } catch (error) {
        console.error("Error fetching coin data", error);
        setLoading(false);
      }
    }
  };

  const handleDaysChange = (e) => {
    setDays(e.target.value);

  }
  // console.log(crypto1Data);
  // console.log(crypto2Data);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='w-[97%] md:w-[94%] mx-auto flex flex-col gap-5 py-5 px-1'>
          <div className="w-full mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 px-4 dark:bg-gray-800 bg-gray-300 rounded-lg shadow-lg gap-4">
            <SelectCoins coins={coins} crypto1={crypto1} crypto2={crypto2} setCrypto1={setCrypto1} setCrypto2={setCrypto2} handleCoinChange={handleCoinChange} />
            <SelectDays days={days} isComparePage={false} handleDaysChange={handleDaysChange} />
          </div>
          <div className='flex flex-col gap-5'>
            <ListCard coin={crypto1Data}/>
            <ListCard coin={crypto2Data}/>
          </div>
        </div>

      )}
    </>
  );
}

export default Compare;

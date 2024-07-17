import React, { useEffect, useState } from 'react'
import SelectCoins from '../components/ComparePage/SelectCoins'
import get100Coins from '../functions/get100Coins';
import SelectDays from '../components/CoinInfoPage/SelectDays'
import Loader from '../components/common/Loader'

const Compare = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
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

  const handleDaysChange = () => { }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='w-[97%] md:w-[94%] mx-auto flex flex-col gap-5 py-5 px-1'>
          <div className="w-full mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 px-4 dark:bg-gray-800 bg-gray-300 rounded-lg shadow-lg gap-4">
            <SelectCoins coins={coins} crypto1={crypto1} crypto2={crypto2} setCrypto1={setCrypto1} setCrypto2={setCrypto2} />
            <SelectDays days={days} isComparePage={false} />
          </div>
        </div>

      )}
    </>
  );
}

export default Compare;

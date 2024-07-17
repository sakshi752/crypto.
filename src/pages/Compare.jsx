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

  const fetchCoins = async () => {
    try {
      const myCoins = await get100Coins();
      // console.log(myCoins);
      setCoins(myCoins);
      setLoading(false)
    } catch (error) {
      console.log("error:", error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCoins();
  }, [])

  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <div className='w-[97%] md:w-[94%] mx-auto flex flex-col py-5 px-1'>
            <SelectCoins coins={coins} crypto1={crypto1} crypto2={crypto2} setCrypto1={setCrypto1} setCrypto2={setCrypto2} />
            {/* <SelectDays /> */}
          </div>
        )
      }
    </>


  )
}

export default Compare

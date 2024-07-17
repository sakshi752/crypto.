import React, { useEffect, useState } from 'react'
import SelectCoins from '../components/ComparePage/SelectCoins'
import get100Coins from '../functions/get100Coins';
import SelectDays from '../components/CoinInfoPage/SelectDays'

const Compare = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true)

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
    <div className='w-[97%] md:w-[94%] mx-auto flex flex-col py-5 px-1'>
      <SelectCoins coins={coins} />
      {/* <SelectDays /> */}
    </div>
  )
}

export default Compare

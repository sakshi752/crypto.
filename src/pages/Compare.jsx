import React, { useEffect, useState } from 'react'
import SelectCoins from '../components/ComparePage/SelectCoins'
import get100Coins from '../functions/get100Coins';

const Compare = () => {
  const [coins, setCoins] = useState([]);
  const [loading,setLoading]=useState(true)
  
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

  console.log(coins);

  useEffect(() => {
    fetchCoins();
  },[])

  return (
    <div>
      <SelectCoins coins={coins}/>
    </div>
  )
}

export default Compare

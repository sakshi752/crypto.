import React, { useEffect, useState } from 'react'
import TabsComponent from '../components/Dashboard/TabsComponent'
import axios from 'axios';

const Dashboard = () => {

  const [coins,setCoins]=useState([]);

  const fetchCoins= async()=>{
        try {
          const {data}=await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
          setCoins(data)
          console.log(data);
        } catch (error) {
          console.log("error:",error);
        }
  }
  useEffect(()=>{
      fetchCoins()
  },[])

  return (
    <div>
      <TabsComponent/>
    </div>
  )
}

export default Dashboard

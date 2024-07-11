import React, { useEffect, useState } from 'react'
import TabsComponent from '../components/Dashboard/TabsComponent'
import Search from '../components/Dashboard/Search';
import axios from 'axios';

const Dashboard = () => {

  const [coins,setCoins]=useState([]);
  const [search,setSearch]=useState("");

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
  },[]);

  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }

  return (
    <div>
      <Search search={search} handleSearch={handleSearch}/>
      <TabsComponent coins={coins}/>
    </div>
  )
}

export default Dashboard

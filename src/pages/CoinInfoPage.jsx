import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/common/Loader';
import { coinObject } from '../functions/coinObject';
import ListCard from '../components/Dashboard/ListCard';
import DescriptionSec from '../components/CoinInfoPage/DescriptionSec';

const CoinInfoPage = () => {
  const { id } = useParams();
  const [coinInfo, setCoinInfo] = useState();
  const [loading, setLoading] = useState(true);

  const fetchCoinInfo = async () => {
    const { data } = await axios(`https://api.coingecko.com/api/v3/coins/${id}`)
    coinObject(setCoinInfo,data)
    console.log(coinInfo);
    setLoading(false)
  }
  useEffect(() => {
    fetchCoinInfo();
  }, [])

  return (
    <>
      {loading ? (<Loader />) : (
        <div  className='w-[97%] md:w-[94%] mx-auto flex flex-col gap-5 py-5 px-1'>
          <ListCard coin={coinInfo}/>
          <DescriptionSec desc={coinInfo.desc}/>
        </div>
      )}

    </>

  )
}

export default CoinInfoPage

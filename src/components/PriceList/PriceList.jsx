import React, { useEffect, useState } from 'react'
import PriceCard from '../../utilites/PriceCard';
import { data } from 'autoprefixer';

const PriceList = () => {
  const [prices, setPrices ]= useState([]);
  useEffect(()=>{
    fetch('prices.json')
    .then(res=>res.json())
    .then(data=>setPrices(data))


  },[])
  
  return (
    <>
    <div className='bg-purple-50 mx-auto w-1/2 mt-5 py-2 font-sans'>
        <h3 className='text-lg font-bold text-blue-950 text-center tracking-wider leading-3 py-3'>Affordable price list</h3>
    </div>
    <div className='grid grid-cols-3 mx-12 mt-4 gap-4'>
      {prices.map(price=><PriceCard key={price.id} price={price}></PriceCard>)}
    </div>
    </>
  )
}

export default PriceList
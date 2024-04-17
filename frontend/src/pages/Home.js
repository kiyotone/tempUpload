import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <BannerProduct/>
      <CategoryList/>

      <HorizontalCardProduct category={"Off-Road"} heading={"Off-Road"}/>
      <HorizontalCardProduct category={"Others"} heading={"Others"}/>
      <HorizontalCardProduct category={"Pants"} heading={"Pants"}/>
      <HorizontalCardProduct category={"Tank-Bags"} heading={"Tank Bags"}/>
      <HorizontalCardProduct category={"Boots"} heading={"Boots"}/>
   
    </div>
  )
}

export default Home
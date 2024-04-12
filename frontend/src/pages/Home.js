import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"Off-Road"} heading={"Off-Road"}/>
      <HorizontalCardProduct category={"Others"} heading={"Others"}/>

      <VerticalCardProduct category={"Pants"} heading={"Pants"}/>
      <VerticalCardProduct category={"Tank-Bags"} heading={"Tank Bags"}/>
      <VerticalCardProduct category={"Boots"} heading={"Boots"}/>
   
    </div>
  )
}

export default Home
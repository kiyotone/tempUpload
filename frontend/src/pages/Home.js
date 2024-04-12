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
      {/* <VerticalCardProduct category={"Jackets"} heading={"Foot Care products"}/>
      <VerticalCardProduct category={"Gloves"} heading={"Gloves Products"}/>
      <VerticalCardProduct category={"Accessories"} heading={"Baby Products"}/>
      <VerticalCardProduct category={"Official-Merch"} heading={"Official-Merching Products"}/>
      <VerticalCardProduct category={"Helmets"} heading={"Helmets Products"}/> */}
    </div>
  )
}

export default Home
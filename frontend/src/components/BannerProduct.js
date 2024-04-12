import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const BannerProduct = () => {
  return (
    <div className="max-h-[500px] relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full max-h-[700px]  object-cover"
              src="bakgrnd.png"
              alt="background"
            />
            <div className="mt-[-20rem] text-left pl-9  ">
              <h1 className="px-4  mini:text-7xl mobile:text-5xl text-xl font-bold text-[#F3F8FF]">
                TWO WHEELER <span className="text-[#49108B]"></span>
              </h1>
              <h1 className="px-4  mini:text-7xl mobile:text-5xl text-xl font-bold text-[#F3F8FF]">
                Shop<span className="text-[#49108B]"> Fast</span>
              </h1>
              <button className=" mini:w-52  ml-2 mt-5 bg-[#E26EE5] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-1 px-2 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full max-h-[700px] object-cover"
              src="bakgrnd2.jpg"
              alt="background2  "
            />
            <div className="mt-[-20rem]  ">
              <h1 className="px-4  mini:text-7xl mobile:text-5xl text-xl font-bold text-[#F3F8FF]">
                TWO WHEELER <span className="text-[#b0b0b0]"> </span>
              </h1>
              <h1 className="px-4  mini:text-7xl mobile:text-5xl text-xl font-bold text-[#F3F8FF]">
                Shop<span className="text-[#51ce89]"> Fast</span>
              </h1>
              <button className=" mini:w-52  ml-7 mt-5 bg-[#f25c48] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-1 px-2 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full max-h-[700px] object-cover"
              src="bakgrnd3.jpg"
              alt="background3"
            />
            <div className="mt-[-20rem] text-left pl-9  ">
              <h1 className="px-4  mini:text-7xl mobile:text-5xl text-xl font-bold text-[#F3F8FF]">
                TWO WHEELER <span className="text-[#a44ae0]"> </span>
              </h1>
              <h1 className="px-4  mini:text-7xl mobile:text-5xl text-xl font-bold text-[#F3F8FF]">
                Shop<span className="text-[#f1bb47]"> Fast</span>
              </h1>
              <button className=" mini:w-52  ml-2 mt-5 bg-[#49ecb6] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-1 px-2 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full max-h-[700px] object-cover"
              src="bakgrnd4.jpg"
              alt="background4 "
            />
            <div className="mt-[-20rem]  ">
              <h1 className="px-4  mini:text-7xl mobile:text-5xl text-xl font-bold text-[#4f79b3]">
                TWO WHEELER <span className="text-[#3a3f9e]"> </span>
              </h1>
              <h1 className="px-4  mini:text-7xl mobile:text-5xl text-xl font-bold text-[#3b66a2]">
                Shop<span className="text-[#29754b]"> </span>
              </h1>
              <button className=" mini:w-52  ml-7 mt-5 bg-[#f25c48] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-1 px-2 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
  )
}

export default BannerProduct

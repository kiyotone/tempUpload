import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const BannerProduct = () => {
  return (
    <div className="h-[calc(100vh-2px)] relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[100%]"
      >
        <SwiperSlide>
          <div className="bg-back-1 bg-center bg-cover bg-no-repeat h-full w-full"></div>
          <div className="mt-[-15rem] text-left pl-9 max-w-[50%]">
            <p className="px-4 text-5xl uppercase font-bold text-[#F3F8FF]">
              Ride into the Future
            </p>
            <p className="px-4 text-3xl font-bold  text-[#f1bb47]">
              Where Quality Parts Meet Expert Service!
            </p>
            <button className=" mini:w-52 ml-2 mt-5 bg-[#E26EE5] hover:bg-black hover:text-white text-[#13070f] text-[8px] py-2 px-4 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-back-2 bg-center bg-cover bg-no-repeat h-full w-full"></div>
          <div className="mt-[-15rem] text-left pl-9">
            <h1 className="px-4  text-5xl font-bold text-[#F3F8FF]">
              Upgrade Your Ride
            </h1>
            <h1 className="px-4  text-3xl font-bold  text-[#f1bb47]">
              Quality Parts, Expert Service!
            </h1>
            <button className=" mini:w-52  ml-7 mt-5 bg-[#f25c48] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-2 px-4 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-back-3 bg-center bg-cover bg-no-repeat h-full w-full"></div>
          <div className="mt-[-15rem] text-left pl-9 ">
            <h1 className="px-4  mini:text-7xl mobile:text-5xl text-xl font-bold text-[#F3F8FF]">
              Elevate Your Ride:
            </h1>
            <h1 className="px-4   text-3xl font-bold text-[#f1bb47]">
              Premium Parts, Seamless Service!
            </h1>
            <button className=" mini:w-52  ml-2 mt-5 bg-[#49ecb6] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-2 px-4 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-back-4 bg-center bg-cover bg-no-repeat h-full w-full"></div>
          <div className="mt-[-15rem] text-left pl-9">
            <h1 className="px-4  mini:text-7xl mobile:text-5xl text-xl font-bold text-[#F3F8FF]">
              Ride with Confidence:
            </h1>
            <h1 className="px-4  text-4xl font-bold text-[#ffd14b]">
              Quality Parts, Expert Care!
            </h1>
            <button className=" mini:w-52  ml-7 mt-5 bg-[#f25c48] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-2 px-4 transition-all duration-300 ease-in-out  mini:text-4xl mobile:text-3xl mobile:w-40 w-[6rem]">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerProduct;

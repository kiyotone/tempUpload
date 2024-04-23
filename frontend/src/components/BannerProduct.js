import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import video from "../assest/video.mp4";

import "swiper/css";
import "swiper/css/pagination";

const BannerProduct = () => {
  return (
    <div className="h-[calc(100vh-2px)] relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
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
          <div className="relative">
            <div className="absolute left-[3%] bottom-[20%]  z-50  text-left pl-9 max-w-[50%]">
              <p className="px-4 text-6xl uppercase font-bold text-[#F3F8FF]">
                Ride into the Future
              </p>
              <p className="px-4 text-3xl font-bold  text-[#f1bb47]">
                Where Quality Parts Meet Expert Service!
              </p>
            </div>
            <video controls={false} autoPlay muted loop>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-back-1 bg-center bg-cover bg-no-repeat h-full w-full"></div>
          <div className="mt-[-15rem] text-left pl-9 max-w-[50%]">
            <p className="px-4 text-6xl uppercase font-bold text-[#F3F8FF]">
              Ride into the Future
            </p>
            <p className="px-4 text-3xl font-bold  text-[#f1bb47]">
              Where Quality Parts Meet Expert Service!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-back-2 bg-center bg-cover bg-no-repeat h-full w-full"></div>
          <div className="mt-[-15rem] text-left pl-9">
            <h1 className="px-4  text-6xl font-bold text-[#F3F8FF] uppercase">
              Upgrade Your Ride
            </h1>
            <h1 className="px-4  text-3xl font-bold  text-[#f1bb47]">
              Quality Parts, Expert Service!
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-back-3 bg-center bg-cover bg-no-repeat h-full w-full"></div>
          <div className="mt-[-15rem] text-left pl-9 ">
            <h1 className="px-4  text-6xl uppercase  font-bold text-[#F3F8FF]">
              Elevate Your Ride
            </h1>
            <h1 className="px-4   text-3xl font-bold text-[#f1bb47]">
              Premium Parts, Seamless Service!
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-back-4 bg-center bg-cover bg-no-repeat h-full w-full"></div>
          <div className="mt-[-15rem] text-left pl-9">
            <h1 className="px-4  text-6xl font-bold uppercase text-[#F3F8FF]">
              Ride with Confidence
            </h1>
            <h1 className="px-4  text-3xl font-bold text-[#ffd14b]">
              Quality Parts, Expert Care!
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerProduct;

import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import book from "../assest/book.jpeg";
import { testomonials } from "../assest/testomonail";

const Home = () => {
  return (
    <div className="flex flex-col">
      <BannerProduct />
      <CategoryList />

      <div className="mt-10">
        <p className="italic text-sm text-center text-[#dc2626]">
          Rider's Top Picks
        </p>
        <HorizontalCardProduct
          category={"Off-Road"}
          heading={"Popular Items"}
        />
      </div>

      {/* Book appointement */}
      <div className="max-w-[900px] mx-auto">
        <p className="italic text-sm text-center text-[#dc2626]">
          Wanna connect? Time to book your mechanic
        </p>
        <p className="text-center font-semibold text-4xl">Book Appointment</p>

        <div className="flex py-10">
          <div className="mx-10 my-5 flex flex-col  p-10 max-w-[45%]">
            <div className="col-span-7">
              Easily schedule your bike service appointments online, connecting
              directly with our expert mechanics for efficient and convenient
              service.
            </div>
            <button className="bg-[#dc2626] text-center text-white w-[10rem] py-3 rounded-lg my-10 hover:bg-[#f1bb47]">
              Book
            </button>
          </div>

          <div className="">
            <img
              src={book}
              alt="book"
              width={500}
              className="aspect-square h-[22rem]"
            />
          </div>
        </div>
      </div>

      {/* Testomonial */}
      <div className="max-w-[75%] mx-auto my-10 p-5">
        <p className="italic text-sm text-center text-[#dc2626]">
          See what people have to say about us
        </p>
        <p className="text-center font-semibold text-4xl">Testomonial</p>

        <div className="my-5 flex gap-14">
          {testomonials.map(({ testimonial, job, name }, index) => {
            return (
              <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-8 testomonial relative">
                  <p className="text-gray-800 text-lg italic mb-4 z-10">
                    {testimonial}
                  </p>
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full mr-4"
                      src="https://via.placeholder.com/150"
                      alt="Profile"
                    />
                    <div>
                      <p className="text-gray-800 font-semibold">{name}</p>
                      <p className="text-gray-600 text-sm italic">{job}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

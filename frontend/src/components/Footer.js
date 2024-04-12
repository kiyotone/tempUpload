import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { TiLocation } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import images from '../assest/banner/payment.png';

const Footer = () => {
  return (
    <div >
      <div className="bg-[#f1f5f9] h-[38rem] w-full flex flex-col mini:flex-row mini:h-[18.9rem]">
        <div className="h-[12 rem] w-full  mini:w-[26rem]">
          <h1 className="flex items-center justify-center pt-8 font-logo2 text-4xl">
            TWO WHEELER
          </h1>
          <div className="mt-3 mini:h-[14 rem] w-full h-[6rem] mini:w-[25rem] mini:gap-x-6  ">
            <h1 className="font-serif text-center mini:h-24">
           
"Revolutionize your ride with our top-tier selection of bike parts and accessories. From the latest in performance technology to must-have maintenance essentials, we've got everything you need to elevate your cycling experience."
            </h1>
            <div className="flex flex-row justify-center items-center mt-12">
              <div className="flex items-center justify-center space-x-4">
                <a
                  href="/home"
                  className="text-lime-700  hover:text-indigo-600"
                >
                  Home
                </a>
                <a
                  href="/Shop"
                  className="text-lime-700  hover:text-indigo-600"
                >
                  Shop
                </a>
                <a
                  href="/About"
                  className="text-lime-700 hover:text-indigo-600"
                >
                  About
                </a>
                <a
                  href="/Gallery"
                  className="text-lime-700 hover:text-indigo-600"
                >
                  Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full mini:w-[43%] bg-[#f1f5f9] flex  flex-row mini:flex-col items-center justify-center  ">
          <div className=" mini:w-[rem] mini:h-full w-full     ">
            <h2 className="text-3xl font-boldFont mb-4  flex justify-center mt-6">
              Contact Information
            </h2>
            <ul>
              <li className="mb-2 ">
                <a
                  href="tel:+9841583459"
                  className="text-black hover:underline justify-center  flex "
                >
                  <FaPhone className=" text-xl  " /> +977 9820000000
                </a>
              </li>
              <li className="mb-2 ">
                <a
                  href="mailto:info@example.com"
                  className="text-black hover:underline justify-center flex"
                >
                  <CgMail className=" text-2xl" /> twowheeler@gmail.com
                </a>
              </li>
              <li className="">
                <a
                  href="Contact us"
                  className="text-black hover:underline justify-center flex"
                >
                  <TiLocation className=" text-2xl" /> Baneshwor, KTM, Nepal{" "}
                </a>
              </li>
            </ul>
            <div className="flex items-center justify-center gap-2 text-2xl pt-9   ">
              <div className="bottom-3 bg-[#ecdec1] h-[2.5rem] w-[2.5rem] rounded-full flex justify-center items-center pt-1  hover:bg-green-700">
                <FaInstagram />
              </div>
              <div className="bottom-3 bg-[#ecdec1] h-[2.5rem] w-[2.5rem] rounded-full flex justify-center items-center pt-1  hover:bg-green-700">
                <FaFacebook />
              </div>
              <div className="bottom-3 bg-[#ecdec1] h-[2.5rem] w-[2.5rem] rounded-full flex justify-center items-center pt-1  hover:bg-green-700">
                <FaLinkedin />
              </div>
              <div className="bottom-3 bg-[#ecdec1] h-[2.5rem] w-[2.5rem] rounded-full flex justify-center items-center pt-1 hover:bg-green-700">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[17rem] md:w-[30%] pt-86 mini:pt-0 ">
          <div className="bg-[#f1f5f9] p-8">
            <h2 className="text-2xl font-boldFont mb-4 flex justify-center items-center">
              {" "}
              Newsletter
            </h2>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-mini mb-4"
              />
              <button
                type="submit"
                className=" bg-red-600 text-white px-4 py-2 "
              >
                Subscribe
              </button>
              <p className="text-sm text-gray-500 pl-3 mini:pl-16">
                We do not spam. We send offers instead.
              </p>
            </form>
          </div>
          <div className="bg-[#f1f5f9]">
            <div className="flex items-center justify-center">
              <img src={images}  alt="payment" className="w-48 h-6" />
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-gray-500  h-12 w-full  bg-[#eef0e5] relative mini:absolute flex justify-center items-center  mini:mt-0">
        <p className=" text-black">
          &copy; 2024 TWO WHEELER All Right Reserved
        </p>
      </footer>
    </div>
  )
}

export default Footer

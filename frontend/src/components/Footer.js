import React from "react";
import { FaPhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { TiLocation } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import footer from "../assest/footer.svg";

const Footer = () => {
  return (
    <div>
      <img src={footer} alt="footer" />
      <div className=" w-full bg-[#dc2626] text-[#ecdec1]">
        <div className="flex w-full items-center justify-center">
          <div className="w-[26rem] flex flex-col items-center justify-center">
            <RiMotorbikeFill className="text-black h-10 w-10" />
            <h1 className="flex items-center justify-center font-logo2 text-4xl">
              TWO WHEELS
            </h1>
            <div className="mt-3 mini:h-[14 rem] w-full h-[6rem] mini:w-[25rem] mini:gap-x-6  ">
              <h1 className="font-serif text-center mini:h-24 text-[12px] italic">
                "Revolutionize your ride with our top-tier selection of bike
                parts and accessories. From the latest in performance technology
                to must-have maintenance essentials, we've got everything you
                need to elevate your cycling experience."
              </h1>
              <div className="flex flex-row justify-center items-center">
                <div className="flex items-center justify-center space-x-4">
                  <a href="/home" className="text-[#eee] hover:text-black">
                    Home
                  </a>
                  <a href="/Shop" className="text-[#eee] hover:text-black">
                    Shop
                  </a>
                  <a href="/About" className="text-[#eee] hover:text-black">
                    About
                  </a>
                  <a href="/Gallery" className="text-[#eee] hover:text-black">
                    Gallery
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full mini:w-[43%]  flex  flex-row mini:flex-col items-center justify-center  ">
            <div className=" mini:w-[rem] w-full     ">
              <h2 className="text-3xl font-boldFont mb-4  flex justify-center mt-6">
                Contact Information
              </h2>
              <ul>
                <li className="mb-2 ">
                  <a
                    href="tel:+9841583459"
                    className=" hover:underline justify-center  flex "
                  >
                    <FaPhone className=" text-xl  " /> +977 9820000000
                  </a>
                </li>
                <li className="mb-2 ">
                  <a
                    href="mailto:info@example.com"
                    className=" hover:underline justify-center flex"
                  >
                    <CgMail className=" text-2xl" /> twowheeler@gmail.com
                  </a>
                </li>
                <li className="">
                  <a
                    href="Contact us"
                    className=" hover:underline justify-center flex"
                  >
                    <TiLocation className=" text-2xl" /> Baneshwor, KTM, Nepal{" "}
                  </a>
                </li>
              </ul>
              <div className="flex items-center justify-center gap-2 text-2xl pt-9   ">
                <div className="bottom-3 text-black bg-[#ecdec1] h-[2.5rem] w-[2.5rem] rounded-full flex justify-center items-center pt-1  hover:bg-black hover:text-white">
                  <FaInstagram />
                </div>
                <div className="bottom-3 text-black bg-[#ecdec1] h-[2.5rem] w-[2.5rem] rounded-full flex justify-center items-center pt-1  hover:bg-black hover:text-white">
                  <FaFacebook />
                </div>
                <div className="bottom-3 text-black bg-[#ecdec1] h-[2.5rem] w-[2.5rem] rounded-full flex justify-center items-center pt-1  hover:bg-black hover:text-white">
                  <FaLinkedin />
                </div>
                <div className="bottom-3 text-black bg-[#ecdec1] h-[2.5rem] w-[2.5rem] rounded-full flex justify-center items-center pt-1 hover:bg-black hover:text-white">
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[17rem] md:w-[30%] pt-86 mini:pt-0 ">
            <div className=" p-8">
              <h2 className="text-2xl font-boldFont mb-4 flex justify-center items-center">
                {" "}
                Newsletter
              </h2>
              <form className="flex flex-col">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-mini mb-4 placeholder:text-black"
                />
                <button
                  type="submit"
                  className=" bg-[#f1bb47] text-black rounded-sm px-4 py-2 hover:bg-black hover:text-[#f1bb47] duration-300 ease-in-out"
                >
                  Subscribe
                </button>
                <p className="text-sm text-[#ecdec1] italic pl-3 mini:pl-16">
                  We do not spam. We send offers instead.
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center text-[ecdec1] text-[12px] p-2 w-full  flex justify-center items-center ">
          &copy; 2024 TWO WHEELER All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;

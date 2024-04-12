import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import user from "@/public/iconUser.png";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [modal, setModal] = useState(false);
  const [userLoggedin, setUserLoggedIn] = useState(false);

  useEffect(() => {
    console.log(":sdjad");
  },[])

  return (
    <div
      className={`h-[6.5rem]  px-10 border-gray-200 ${
        pathname.startsWith("/posts") || pathname.startsWith("/volun")
          ? " bg-black "
          : " bg-transparent "
      } border-b-[1px]  w-full text-white  z-50 `}
    >
      <div className="h-full flex items-center">
        {/* Logo */}
        <div className="ml-1 h-full flex w-[15rem] border-gray-200 items-center border-r-[1px]">
          <Link href={"/"}>
            <img
              src="https://i.ibb.co/qjxQDyW/image.png"
              alt="Logo"
              className="h-16"
              width={250}
            />
          </Link>
        </div>

        <div className="h-full flex space-x-6 items-center border-gray-200 pl-[5rem] pr-[5rem] border-r-[1px]">
          {/* Testimonials */}
          <div>
            <span
              onClick={() => router.push("/")}
              className="cursor-pointer hover:text-gray-300"
            >
              Home
            </span>
          </div>
          <div>
            <span className="cursor-pointer hover:text-gray-300">
              <Link href={"/fundings"}>Donation</Link>
            </span>
          </div>
          <div>
            <span className="cursor-pointer hover:text-gray-300">
              <Link href={"/volun"}>Volunteer</Link>
            </span>
          </div>
          <div>
            <span className="cursor-pointer hover:text-gray-300">
              <Link href={"/add-volunteering"}>About Us</Link>
            </span>
          </div>
          <div>
            <span className="cursor-pointer hover:text-gray-300 mr-2">
              <Link href={"/add-funding"}>Buy us coffee</Link>
            </span>
          </div>
        </div>

        <div className="ml-[3rem] flex items-center rounded-lg p-4">
          <div
            className={` ${
              !modal && " hidden "
            } rounded-lg text-black items-center flex pt-2 flex-col absolute w-36 h-12 top-20 bg-white `}
          >
            <div
              className=" flex items-center gap-x-2 hover:bg-gray-100 w-full mx-2  p-2  "
              onClick={() => handleLogout()}
            >
              <IoIosLogOut />
              <div>Logout</div>
            </div>
          </div>

          {userLoggedin ? (
            <Image
              alt="21"
              onClick={() => setModal(!modal)}
              className="w-12 h-w-12 mr-[3rem] text-white flex items-center p-2  rounded-full bg-white"
              src={user}
            />
          ) : (
            <div
              onClick={() => router.push("/auth/login")}
              className=" mr-[3rem] text-white flex items-center  py-1.5 rounded "
            >
              Log In
            </div>
          )}

          <div>
            <Link
              href={"/add-funding"}
              className="cursor-pointer ml-9 px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 content-end"
            >
              Create Funding
            </Link>
          </div>
          <div>
            <Link
              href={"/add-volunteering"}
              className="cursor-pointer ml-9 px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 content-end"
            >
              Create volunteering
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import uploadImage from "../helpers/uploadImage";
import login from "../assest/login.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await uploadImage(file);

    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic.url,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      const dataResponse = await fetch(SummaryApi.signUP.url, {
        method: SummaryApi.signUP.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/login");
      }

      if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } else {
      toast.error("Please check password and confirm password");
    }
  };

  return (
    <section id="signup" className=" flex items-center ">
      <div className="w-[60rem]  flex">
        <div className=" pl-20 text-orange absolute top-[20rem] font-bold text-[5rem] items-center animate-pulse duration-[6000ms] ease-in-out">
          GETTING STARTED
        </div>
      </div>
      <div className="mx-auto w-[32rem] px-4">
        <div className="bg-white p-5 w-full ">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || loginIcons} alt="login icons" />
            </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>

          <form
            className="pt-6 h-[30rem] flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <div className="relative mt-[2rem]">
              <input
                type="text"
                placeholder=" "
                name="name"
                value={data.name}
                onChange={handleOnChange}
                required
                className={`w-[25rem] h-[3rem] pl-[2.28rem] bg-gray-50 peer border-black placeholder-shown:border-gray-200 border rounded-full "
                }`}
              ></input>
              <label
                htmlFor="name"
                className="absolute bg-white top-[-.77rem] scale-[85%] text-black left-[2.28rem] peer-placeholder-shown:top-[.82rem] cursor-text ease-in-out duration-100 
                peer-focus:text-black peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-[100%]
                peer-focus:top-[-.77rem] peer-focus:bg-white peer-focus:scale-[85%]
              "
              >
                FULL NAME
              </label>
            </div>

            <div className="relative mt-[2rem]">
              <input
                type="email"
                placeholder=" "
                name="email"
                value={data.email}
                onChange={handleOnChange}
                required
                className={`w-[25rem] h-[3rem] pl-[2.28rem] bg-gray-50 peer border-black placeholder-shown:border-gray-200 border rounded-full "
                }`}
              ></input>
              <label
                htmlFor="email"
                className="absolute bg-white top-[-.77rem] scale-[85%] text-black left-[2.28rem] peer-placeholder-shown:top-[.82rem] cursor-text ease-in-out duration-100 
                peer-focus:text-black peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-[100%]
                peer-focus:top-[-.77rem] peer-focus:bg-whites peer-focus:scale-[85%]
              "
              >
                EMAIL
              </label>
            </div>

            <div className="relative mt-[2rem]">
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder=" "
                value={data.password}
                onChange={handleOnChange}
                name="password"
                id="password"
                className={`w-[25rem] h-[3rem] pl-[2.28rem] bg-gray-50 peer border-black placeholder-shown:border-gray-200 border rounded-full "
                }`}
              ></input>
              <label
                htmlFor="password"
                className="absolute bg-white top-[-.77rem] scale-[85%] text-black left-[2.28rem] peer-placeholder-shown:top-[.82rem] cursor-text ease-in-out duration-100 
                peer-focus:text-black peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-[100%]
                peer-focus:top-[-.77rem] peer-focus:bg-white peer-focus:scale-[85%]
              "
              >
                PASSWORD
              </label>

              <div
                className="cursor-pointer absolute right-6 text-gray-400 top-4 text-xl"
                onClick={() => setShowPassword((preve) => !preve)}
              >
                <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </div>

            <div className="relative mt-[2rem]">
              <input
                type={`${showConfirmPassword ? "text" : "password"}`}
                placeholder=" "
                value={data.confirmPassword}
                onChange={handleOnChange}
                name="confirmPassword"
                id="confirmPassword"
                className={`w-[25rem] h-[3rem] pl-[2.28rem] bg-gray-50 peer border-black placeholder-shown:border-gray-200 border rounded-full "
                }`}
              ></input>
              <label
                htmlFor="confirmPassword"
                className="absolute bg-white top-[-.77rem] scale-[85%] text-black left-[2.28rem] peer-placeholder-shown:top-[.82rem] cursor-text ease-in-out duration-100 
                peer-focus:text-black peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-[100%]
                peer-focus:top-[-.77rem] peer-focus:bg-white peer-focus:scale-[85%]
              "
              >
                CONFIRM PASSWORD
              </label>

              <div
                className="cursor-pointer absolute right-6 text-gray-400 top-4 text-xl"
                onClick={() => setShowConfirmPassword((preve) => !preve)}
              >
                <span>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4">
              Sign Up
            </button>

            <p className="pl-8 pt-2 text-gray-400">
              Already have account ?{" "}
              <Link
                to={"/login"}
                className=" text-red-600 hover:text-red-700 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

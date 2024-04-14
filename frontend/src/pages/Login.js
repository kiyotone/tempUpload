import React, { useContext, useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import Context from "../context";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { fetchUserDetails, fetchUserAddToCart } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataResponse = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      toast.success(dataApi.message);
      navigate("/");
      fetchUserDetails();
      fetchUserAddToCart();
    }

    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };

  console.log("data login", data);

  return (
    <section id="login" className="flex items-center h-screen">
      <div className="w-[60rem] h-full">{/* IMAGE */}</div>
      <div className="mx-auto w-[30rem] p-4">
        <div className="bg-white p-5 w-full ">
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
            <img src={loginIcons} alt="login icons" />
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="relative mt-[2rem]">
              <input
                type="email"
                value={data.email}
                placeholder=" "
                name="email"
                onChange={handleOnChange}
                id="email"
                className={`w-[25rem] h-[3rem] pl-[2.28rem] bg-gray-50 peer border-black placeholder-shown:border-gray-200 border rounded-full "
                }`}
              ></input>
              <label
                htmlFor="email"
                className="absolute bg-white top-[-.77rem] scale-[85%] text-black left-[2.28rem] peer-placeholder-shown:top-[.82rem] cursor-text ease-in-out duration-100 
                peer-focus:text-black peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-[100%]
                peer-focus:top-[-.77rem] peer-focus:bg-white peer-focus:scale-[85%]
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

            <Link
              to={"/forgot-password"}
              className="hover:underline pl-8 pt-5 text-gray-400 "
            >
              Forgot password ?
            </Link>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>

          <p className="my-5 pl-8 text-gray-400">
            Don't have account ?{" "}
            <Link
              to={"/sign-up"}
              className=" text-red-600 hover:text-red-700 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;

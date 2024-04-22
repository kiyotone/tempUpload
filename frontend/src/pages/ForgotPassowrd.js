import React, { useState } from "react";
import SummaryApi from "../common";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassowrd = () => {
  
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const forgotPasswordHandler = async (e) => {
    const data  = {
      email: email,
    };
    e.preventDefault();

    const response = await axios.post(SummaryApi.forgotPassword.url, data);
    if (response.data.success) {
     toast.success(response.data.message);
      navigate("/recover-password");
    }
    

  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
          <form onSubmit={(e) => forgotPasswordHandler(e)} className="mt-10">
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#dc2626] hover:bg-red-900 text-white p-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassowrd;

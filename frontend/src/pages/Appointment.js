import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Appointment = () => {
  const userData = useSelector((state) => state?.user?.user);

  const [data, setData] = useState({
    vehiecle_brand: "",
    model: "",
    payment_status: false,
    date: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const createBooking = async (e) => {
    e.preventDefault();

    console.log(data);

    const dataResponse = await fetch(SummaryApi.createAppointment.url, {
      method: SummaryApi.createAppointment.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataApi = await dataResponse.json();
    console.log(dataApi);

    if (dataApi.success) {
      toast.success(dataApi.message);
    }

    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };

  const getBooking = async () => {
    const response = await fetch(SummaryApi.viewAppointment.url, {
      method: SummaryApi.viewAppointment.method,
    });
    console.log(response.data);
  };

  useEffect(() => {
    getBooking();
  }, []);

  return (
    <div className=" flex flex-col items-center ">
      <h1 className="text-3xl text-yellow-600 font-bold py-10">
        Book Your Service
      </h1>
      <form
        onSubmit={createBooking}
        className="w-full h-full items-center flex flex-col text-2xl gap-y-5"
      >
        <label className="text-purple-500 font-semibold" htmlFor="brand">
          Enter Your Vehicle Brand:
        </label>
        <input onChange={handleOnChange} type="brand" name="brand" id="brand" />
        <label className="text-purple-500 font-semibold" htmlFor="model">
          Enter Your Model:
        </label>
        <input onChange={handleOnChange} type="model" name="model" id="date" />
        <label className="text-purple-500 font-semibold" htmlFor="date">
          Choose a date:
        </label>
        <input onChange={handleOnChange} type="date" name="date" id="date" />

        <label className="text-purple-500 font-semibold" htmlFor="description">
          Please Describe Your Problem:
        </label>

        <textarea
          onChange={handleOnChange}
          name="description"
          id="description"
          cols="30"
          rows="10"
        ></textarea>

        <button
          className="bg-purple-800 px-4 py-3 rounded-md text-white "
          type="submit"
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default Appointment;

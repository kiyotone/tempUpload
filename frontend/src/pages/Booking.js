import React from "react";
import { useForm } from "react-hook-form";

const Booking = () => {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();

  return (
    <div>
      <div className="text-center my-6 font-bold text-3xl">
        Book Appointment
      </div>
      <form className="flex flex-col gap-5 justify-center items-center">
        <div>
          <label>Product: </label>
          <input />
        </div>
        <div>
          <label>Date: </label>
          <input />
        </div>
        <button>Book</button>
      </form>
    </div>
  );
};

export default Booking;

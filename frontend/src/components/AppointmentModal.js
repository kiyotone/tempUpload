import React, { useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const AppointmentModal = ({ selectedApp, onClose }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [sending, setSending] = useState(false);

  console.log(selectedApp);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const sendDate = async () => {
    setSending(true);
    const response = await fetch(SummaryApi.finalizeAppointment.url, {
      method: SummaryApi.finalizeAppointment.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appointmentId: selectedApp._id,
        date: selectedDate,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      setSending(false);
      onClose();
      toast.success(data.message);
    }

    if (data.error) {
      setSending(false);
      toast.error(data.message);
      console.log(data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDate();
    setSelectedDate("");
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 className="text-lg font-semibold mb-2">
              Finalize Appointment
            </h2>
            <p>
              <strong>User:</strong> {selectedApp.userId.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedApp.userId.email}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(selectedApp.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Description:</strong> {selectedApp.description}
            </p>
            <p>
              <strong>Model:</strong> {selectedApp.model}
            </p>
            <p>
              <strong>Brand:</strong> {selectedApp.brand}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Date:
                </label>
                <input
                  type="date"
                  id="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
              <div className="mt-4">
                {sending ? (
                  <button
                    type="submit"
                    disabled
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sending
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-700 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;

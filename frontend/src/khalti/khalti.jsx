import React, { useEffect, useState } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import axios from "axios"; // Import axios for making HTTP requests
import config from "./khalticonfig";
import SummaryApi from "../common";
import displayINRCurrency from "../helpers/displayCurrency";

const Khalti = () => {
  let checkout = new KhaltiCheckout(config);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const SHIPPING = 1000;

  const fetchData = async () => {
    const response = await fetch(SummaryApi.addToCartProductView.url, {
      method: SummaryApi.addToCartProductView.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });

    const responseData = await response.json();

    if (responseData.success) {
      setData(responseData.data);
    }
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  const totalQty = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );
  const totalPrice = data.reduce(
    (preve, curr) => preve + curr.quantity * curr?.productId?.sellingPrice,
    0
  );

  // Function to handle a successful Khalti payment
  const handleSuccess = (payload) => {
    // Log the payload (you can remove this)
    console.log(payload);

    // Send a request to your backend to initiate verification
    axios
      .post("http://localhost:8000/khalti-verify", {
        token: payload.token,
        amount: payload.amount,
      })
      .then((response) => {
        // Handle the response from your backend as needed
        console.log(response.data);

        // Show a success message to the user
        alert("Payment successful!");
      })
      .catch((error) => {
        // Handle any errors that occur during the HTTP request
        console.error(error);

        // Show an error message to the user
        alert("Payment failed. Please try again later.");
      });
  };

  return (
    <div className="h-20 w-20">
      <div className="w-screen items-center flex flex-col mt-24">
        <p
          style={{
            background: "#25D366",
            width: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Pay Via Khalti
        </p>

        <div className="mt-5 lg:mt-20  text-base w-[40rem] ">
          {loading ? (
            <div className="h-36 border border-slate-300 text-black animate-pulse"></div>
          ) : (
            <div className=" h-36">
              <h2 className="border-x border-t border-slate-600  px-4 py-1 h-[3rem]">
                Summary
              </h2>
              <div className="border p-7 border-slate-600 px-4 gap-5">
                <div className="flex items-center pb-2 justify-between  text-slate-600">
                  <p>{totalQty} items</p>
                  <p>{displayINRCurrency(totalPrice)}</p>
                </div>

                <div className="flex items-center justify-between  text-slate-600">
                  <p>Shipping</p>
                  <p>NPR {SHIPPING}</p>
                </div>
              </div>
              <div className="border-x border-b p-7 border-slate-600 px-4 gap-5">
                <div className="flex items-center pb-2 justify-between  text-slate-600">
                  <p>Taxes</p>
                  <p>
                    {displayINRCurrency(
                      Number((Number(totalPrice) * 13) / 100)
                    )}
                  </p>
                </div>

                <div className="flex items-center justify-between  text-slate-600">
                  <p>Grand Total</p>
                  <p>
                    {displayINRCurrency(
                      SHIPPING +
                        Number(Number(totalPrice) * 13) / 100 +
                        totalPrice
                    )}
                  </p>
                </div>
              </div>
              <div className="border-x border-b p-7 border-slate-600">
                <button
                  onClick={() =>
                    checkout.show({ amount: 1000, onSuccess: handleSuccess })
                  }
                  className="bg-blue-600 p-2 text-white w-full mt-2"
                >
                  Pay
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Khalti;

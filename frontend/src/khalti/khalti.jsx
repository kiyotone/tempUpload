import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import axios from "axios"; // Import axios for making HTTP requests
import config from "./khalticonfig";

const Khalti = () => {
  let checkout = new KhaltiCheckout(config);

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
    <div>
      <button
        onClick={() =>
          checkout.show({ amount: 1000, onSuccess: handleSuccess })
        }
        style={{
          background: "#25D366",
          width: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 600,
        }}
      >
        Pay Via Khalti
      </button>
    </div>
  );
};

export default Khalti;

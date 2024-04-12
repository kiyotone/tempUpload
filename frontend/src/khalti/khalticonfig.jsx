import mykey from "./khaltikey";
import axios from "axios";
let config = {
  publicKey: mykey.publicTestKey,
  productIdentity: "1234567890",
  productName: "merogarage",
  productUrl: "http://localhost:3000/",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log("1234567890-12345678901234567891234567890");
      console.log(payload);

      axios
        .post("http://localhost:8000/khalti-verify", {
          token: payload.token,
          amount: payload.amount,
        })
        .then((response) => {
          console.log("1234567890-12345678901234567891234567890");

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
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};
export default config;

import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import displayINRCurrency from "../helpers/displayCurrency";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchAllOrders = async () => {
    const fetchData = await fetch(SummaryApi.allOrders.url, {
      method: SummaryApi.allOrders.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();
    setLoading(false);

    setAllOrders(dataResponse.orders);
    console.log(allOrders);
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="bg-white pb-4">
      {allOrders?.map((order) => (
        <div key={order._id} class="border p-4 my-4">
          <h1 class="text-xl font-bold">Order ID: {order._id}</h1>

          <p>User: {order?.userId?.name}</p>
          <p>Order Date: {moment(order.createdAt).format("MMMM Do YYYY")}</p>
          <p>Total Amount: {displayINRCurrency(order.totalPrice)}</p>
          <div class="font-bold mt-2">Items</div>
          <ul class="list-disc ml-4">
            {order.products.map((product) => (
              <li key={product._id} class="list-item">
                {product.productId.productName} - {product.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AllOrders;

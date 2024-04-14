import React, { useContext, useEffect, useState } from "react";
import SummaryApi from "../common";
import Context from "../context";
import displayINRCurrency from "../helpers/displayCurrency";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = useContext(Context);
  const loadingCart = new Array(4).fill(null);

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

  const handleLoading = async () => {
    await fetchData();
  };

  useEffect(() => {
    setLoading(true);
    handleLoading();
    setLoading(false);
  }, []);

  const increaseQty = async (id, stock ,qty) => {
    console.log(stock,qty)
    if (stock <= qty) {
      toast.error("Max Stock Reached");
      return;
    }

    const response = await fetch(SummaryApi.updateCartProduct.url, {
      method: SummaryApi.updateCartProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        quantity: qty + 1,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
    }
  };

  const decraseQty = async (id, qty) => {
    if (qty >= 2) {
      const response = await fetch(SummaryApi.updateCartProduct.url, {
        method: SummaryApi.updateCartProduct.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          quantity: qty - 1,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        fetchData();
      }
    }
  };

  const deleteCartProduct = async (id) => {
    const response = await fetch(SummaryApi.deleteCartProduct.url, {
      method: SummaryApi.deleteCartProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
      context.fetchUserAddToCart();
    }
  };

  const totalQty = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );
  const totalPrice = data.reduce(
    (preve, curr) => preve + curr.quantity * curr?.productId?.sellingPrice,
    0
  );
  return (
    <div className="container mx-auto">
      <div className="text-center text-lg my-3">
        {data.length === 0 && !loading && (
          <p className="bg-white py-5">No Data</p>
        )}
      </div>

      <div className="flex flex-col mx-[8rem] lg:flex-row lg:justify-between p-4">
        <div className="w-full max-w-[50rem] ">
          <div className="border-x border-t h-[3rem] p-2 text-xl border-slate-600">
            SHOPPING CART
          </div>

          <div className="border pb-10 gap-y-10 pt-10 flex flex-col items-start border-slate-600">
            {loading
              ? loadingCart?.map((el, index) => {
                  return (
                    <div
                      key={el + "Add To Cart Loading" + index}
                      className="w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded"
                    ></div>
                  );
                })
              : data.map((product, index) => {
                  return (
                    <div
                      key={product?._id + "Add To Cart Loading"}
                      className="w-full  px-6  rounded flex items-center16"
                    >
                      <div className="w-44 h-w-44 bg-slate-200">
                        <img
                          src={product?.productId?.productImage[0]}
                          className="w-full h-full object-scale-down mix-blend-multiply"
                        />
                      </div>

                      <div className="w-48 h-32 ml-20 ">
                        <h2 className="text-3xl font-serif font-semibold text-ellipsis line-clamp-1">
                          {product?.productId?.productName}
                        </h2>
                        <p className="capitalize text-slate-500">
                          {product?.productId.category}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-red-600 font-medium text-lg">
                            {displayINRCurrency(
                              product?.productId?.sellingPrice
                            )}
                          </p>
                        </div>
                        <div className="flex items-center  mt-1 w-32 shadow-md p-2 pl-4">
                          <button
                            className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded=2xl"
                            onClick={() =>
                              decraseQty(product?._id, product?.quantity)
                            }
                          >
                            -
                          </button>
                          <div className="w-16 items-center flex flex-col">
                            {product?.quantity}
                          </div>
                          <button
                            className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded=2xl"
                            onClick={() =>
                              increaseQty(product?._id,product?.productId?.quantity, product?.quantity)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className=" w-[10rem] flex text-xl h-32 py-2 items-center flex-col ">
                        <p className="text-red-600 font-semibold">STOCK</p>
                        <p className=" ">{product?.productId?.quantity}</p>
                      </div>

                      <div className=" w-[10rem] h-32 py-2 flex items-center flex-col ">
                        {/**delete product */}
                        <div
                          className=" text-red-600 rounded-md p-2 border border-transparent hover:border-red-600 cursor-pointer"
                          onClick={() => deleteCartProduct(product?._id)}
                        >
                          <MdDelete />
                        </div>
                        <p className="text-slate-600 font-semibold text-lg">
                          {displayINRCurrency(
                            product?.productId?.sellingPrice * product?.quantity
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>

        {/***summary  */}
        <div className="mt-5 lg:mt-0 text-base w-full max-w-sm">
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
                  <p>NPR 2000</p>
                </div>
              </div>
              <div className="border-x border-b p-7 border-slate-600 px-4 gap-5">
                <div className="flex items-center pb-2 justify-between  text-slate-600">
                  <p>Taxes</p>
                  <p>NRS 123103</p>
                </div>

                <div className="flex items-center justify-between  text-slate-600">
                  <p>Grand Total</p>
                  <p>NPR 2000</p>
                </div>
              </div>
              <div className="border-x border-b p-7 border-slate-600">
                <button className="bg-blue-600 p-2 text-white w-full mt-2">
                  Payment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

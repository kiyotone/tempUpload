import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryLoading = new Array(13).fill(null);

  const fetchCategoryProduct = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.categoryProduct.url);
    const dataResponse = await response.json();
    setLoading(false);
    setCategoryProduct(dataResponse.data);
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  return (
    <div className="container mx-auto mt-1 mb-[48px]">
      <div className="grid grid-cols-3 items-center justify-between overflow-scroll scrollbar-none gap-1">
        {loading
          ? categoryLoading.map((el, index) => {
              return (
                <div
                  className="h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse"
                  key={"categoryLoading" + index}
                ></div>
              );
            })
          : categoryProduct.map((product, index) => {
              return (
                <Link
                  reloadDocument
                  to={"/product-category?category=" + product?.category}
                  className="cursor-pointer flex flex-col justify-center items-center overflow-hidden  ease-in delay-100"
                  key={product?.category}
                >
                  <div
                    style={{
                      backgroundImage: `url(${product?.productImage[0]})`,
                    }}
                    className="w-full hover:scale-[1.02] card h-[300px] bg-no-repeat bg-cover bg-center p-4 bg-slate-200 flex items-center justify-center"
                  >
                    <p
                      className={`text-center text-lg font-bold text-black md:text-base uppercase p-2 rounded-md -skew-x-12 bg-white `}
                    >
                      {product?.category}
                    </p>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default CategoryList;

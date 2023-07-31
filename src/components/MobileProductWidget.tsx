import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { productAdded } from "../store/cart";
const MobileProductWidget = ({ product }) => {
  const dispatch = useDispatch();
  const productClasses = `bg-${product.category.color}-200 text-${product.category.color}-600 font-semibold px-3 py-1 rounded-xl mr-4 `;
  return (
    <div
      id="product"
      className="w-max  mx-auto rounded-2xl duration-400 ease-in-out visible"
    >
      <div
        id="productImage"
        className="relative px-8 py-5 rounded-3xl bg-gray-100"
      >
        <img src={product.imgSrc} alt="" width="150px" height="150px" />

        <span
          id="discount"
          className="absolute font-semibold top-7 -right-7 bg-red-500 text-white  z-20 rounded-full px-2 py-1"
        >
          {`${product.discount * 100}% OFF`}
        </span>
      </div>
      <div id="productDetails" className="">
        <Link href={`/product/${product.slug}`}>
          <span className="space-between">
            <span id="productName" className="my-4 text-center ">
              {product.name}
            </span>
            <span id="productPrice" className="font-semibold text-xl">
              ${Math.ceil(product.price / 100)}
            </span>
          </span>
        </Link>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default MobileProductWidget;

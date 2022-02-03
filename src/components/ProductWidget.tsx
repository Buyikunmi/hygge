import React from "react";

const ProductWidget = ({
  product: { imgSrc, discount, name, category, price },
}) => {
  const productClasses = `bg-${category.color}-200 text-${category.color}-600 font-semibold px-3 py-1 rounded-xl mr-4`;
  return (
    <div
      id="product"
      className="transition w-max m-4  mx-8 p-2 rounded-2xl duration-400 ease-in-out visible"
    >
      <div
        id="productImage"
        className="relative px-8 py-5 rounded-3xl bg-gray-100"
      >
        <img src={imgSrc} alt="" width="150px" height="150px" />

        <span
          id="discount"
          className="absolute  font-semibold top-7 -right-7 bg-red-500 text-white rounded-full px-2 py-1"
        >
          {`${discount * 100}% OFF`}
        </span>

        <div className=" select-none absolute top-0 left-0  h-full w-full transition duration-450 cursor-pointer  bg-gray-400 bg-opacity-30 rounded-3xl opacity-0 hover:opacity-100 grid place-content-center">
          <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold text-xl">
            Add to Cart
          </button>
        </div>
      </div>
      <div id="productDetails" className="">
        <p id="productName" className="font-semibold text-xl my-4">
          {name}
        </p>
        <div className="flex">
          <span id="productCategory" className={productClasses}>
            {category.name}
          </span>
          <span id="productPrice" className="font-semibold text-xl">
            ${Math.ceil(price / 100)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductWidget;

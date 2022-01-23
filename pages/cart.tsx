import BreadCrumb from "../components/BreadCrumb";

import { useState } from "react";
import { Newsletter, Footer } from "../components";
const cart = () => {
  return (
    <div className="container mx-2">
      <BreadCrumb />

      <div className="text-center">
        <span className="font-bold italic text-xl text-blue-500">
          -Your Cart
        </span>
        <h3 className="font-bold text-xl ">Shopping Cart</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* begin cart items */}
        <div className="">
          <CartItem />
          <CartItem />
        </div>
        {/* end cart items */}
        {/* begin cart info */}
        <div className="border  border-gray-800 border-2 p-16 mt-8 rounded-3xl h-min ">
          <p className="text-center font-bold text-xl text-gray-600 mb-4">
            Cart Total
          </p>
          <CartInfoBlock title="Subtotal" price="209" />
          <CartInfoBlock title="Tax" price="20.73" />
          <CartInfoBlock title="Shipping" price="15" />
          <CartInfoBlock title="Total" price="224" />

          <button className="bg-green-500 text-white px-16">Checkout</button>
        </div>
        {/* end cart info */}
      </div>

      {/* Begin Newsletter */}
      <Newsletter />
      {/*  End newsletter*/}
      {/* Begin Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
};

export default cart;

const CartInfoBlock = ({ title, price }) => {
  return (
    <div>
      <span>{`${title}:`}</span>
      <span className="float-right">{`$${price}`}</span>
    </div>
  );
};

const CartItem = (product) => {
  return (
    <div className="flex border rounded-3xl border-4 border-gray-200 my-6 p-8">
      <div>
        <img
          src="assets/images/products/product-pic-4.png"
          alt="productImage"
          width="200px"
          height="200px"
        />
      </div>
      <div>
        <p id="productName" className="font-bold text-2xl text-gray-600 my-4">
          Sleepless Night
        </p>
        <p className="text-lg  font-semibold  mb-4">$97</p>
        <ProductCounter count={2} />
      </div>
    </div>
  );
};

const ProductCounter = ({ count }) => {
  const [productCount, setProductCount] = useState<number>(count);
  return (
    <div className="border rounded-full w-max">
      <button
        onClick={() =>
          setProductCount(productCount <= 0 ? 0 : productCount - 1)
        }
        className="hover:bg-gray-200 active:bg-gray-300 transition duration-300 text-lg font-semibold pl-2 py-2 rounded-tl-full rounded-bl-full"
      >
        &minus; &nbsp;
      </button>
      <span className="px-4">{productCount}</span>
      <button
        onClick={(e) => setProductCount(productCount + 1)}
        className="hover:bg-gray-200 active:bg-gray-300 transition duration-300 text-lg font-semibold px-2 py-2 rounded-tr-full rounded-br-full"
      >
        &nbsp;+
      </button>
    </div>
  );
};

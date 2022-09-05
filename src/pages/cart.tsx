import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Link from "next/link";

import BreadCrumb from "../components/BreadCrumb";
import { Newsletter, Footer } from "../sections";
import SectionHeader from "../components/SectionHeader";

import {
  cartEmptied,
  productCountDecreased,
  productCountIncreased,
} from "../store/cart";

const cart = () => {
  const cart = useSelector((state: RootStateOrAny) => state.cart || 0);

  const dispatch = useDispatch();

  const prices = [
    {
      title: "Subtotal",
      price: Math.ceil(calculateSubtotal() / 100),
    },

    {
      title: "Tax",
      price: 20.73,
    },
    {
      title: "Shipping",
      price: 15,
    },
  ];

  function calculateSubtotal() {
    return (
      cart.length &&
      cart.reduce((a, b) => a.noInCart * a.price + b.noInCart * b.price)
    );
  }

  function calculateTotal() {
    return Math.ceil(prices.map((a) => a.price).reduce((a, b) => a + b));
  }
  const total = calculateTotal();
  return (
    <div>
      <BreadCrumb />

      <div className="flex">
        <SectionHeader
          slogan="Your Cart"
          title="Shopping Cart"
          center={false}
        />
        <button
          className="ml-auto border border-gray-200 hover:border-gray-600 transition duration-200 ease-out py-4 rounded-full font-bold text-xl px-4 text-gray-400 hover:text-gray-800"
          onClick={() => dispatch(cartEmptied({ cart: [] }))}
        >
          Clear All
        </button>
      </div>
      <div className="flex w-10/12 mx-auto">
        {/* begin cart items */}
        <div>
          {cart.map((product, i) => (
            <CartItem key={i} product={product} />
          ))}
        </div>
        {/* end cart items */}
        {/* begin cart info */}
        <div className="border  border-gray-500 border-2 p-12 mt-8 rounded-3xl h-min ml-auto ">
          <p className="text-center font-bold text-xl text-gray-600 mb-4">
            Cart Total
          </p>
          <CartInfoBlock
            title="Subtotal"
            price={Math.ceil(calculateSubtotal() / 100)}
          />
          <CartInfoBlock title="Tax" price="20.73" />
          <CartInfoBlock title="Shipping" price="15" />
          <b>
            <CartInfoBlock title="Total" price={calculateTotal()} />
          </b>
          <Link href="/checkout">
            <button className="bg-green-500 text-white px-16 mt-8 py-3 rounded-full text-semibold hover:text-gray-200 hover:bg-green-600 transition duration-200 ">
              Checkout
            </button>
          </Link>
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
    <div className="my-3 text-lg">
      <span>{`${title}:`}</span>
      <span className="float-right">{`$${price}`}</span>
    </div>
  );
};

const CartItem = ({ product }) => {
  // const [productCount, setProductCount] = useState(product.noInCart);
  return (
    <div className="flex border rounded-3xl border-1 border-gray-400 p-6 my-2">
      <div>
        <img
          src={product.imgSrc}
          alt={product.name}
          className="w-[150px] h-[150px] bg-gray-100 rounded-2xl"
        />
      </div>
      <div className="ml-4">
        <p id="productName" className="font-bold text-2xl text-gray-600 my-4">
          {product.name}
        </p>
        <p className="text-lg  font-semibold  mb-4">
          ${Math.ceil(product.price / 100)}
        </p>
        <ProductCounter product={product} />
      </div>
    </div>
  );
};

const ProductCounter = ({ product }) => {
  const dispatch = useDispatch();
  // const [productCount, setProductCount] = useState<number>(count);
  return (
    <div className="border rounded-full w-max">
      <button
        onClick={
          () => {
            dispatch(productCountDecreased({ product }));
          }
          // setProductCount(productCount <= 0 ? 0 : productCount - 1)
        }
        className="hover:bg-gray-200 active:bg-gray-300 transition duration-300 text-lg font-semibold pl-2 py-2 rounded-tl-full rounded-bl-full"
      >
        &minus; &nbsp;
      </button>
      <span className="px-4">{product.noInCart}</span>
      <button
        onClick={() => {
          dispatch(productCountIncreased({ product }));
        }}
        className="hover:bg-gray-200 active:bg-gray-300 transition duration-300 text-lg font-semibold px-2 py-2 rounded-tr-full rounded-br-full"
      >
        &nbsp;+
      </button>
    </div>
  );
};

import Link from "next/link";
import { BreadCrumb, InputWidget, SecondaryButton } from "../components";

import { GetStaticPaths, GetStaticProps } from "next";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";

import { Footer } from "../sections";
import { productRemoved } from "../store/cart";

// import cart from "../store/cart";/
const Checkout = () => {
  const cart = useSelector((state: RootStateOrAny) => state.cart);

  return (
    <div className="mx-auto w-11/12 ">
      <BreadCrumb />

      <div className="text-center">
        <span className="font-semibold text-blue-600 italic text-lg">
          -Almost there
        </span>
        <p className="font-bold text-2xl">Checkout</p>
      </div>

      <div className="flex gap-6 mb-12">
        <div className="p-12 border border-gray-200 border-2 rounded-3xl w-5/12 h-min">
          <p className="text-2xl font-bold text-gray-800">Details</p>

          <form action="">
            <InputWidget name="email" type="email" title="Email Address" />
            <InputWidget name="password" type="password" title="Password" />

            <div className="mt-12">
              <button
                type="submit"
                className="bg-green-500 font-bold text-xl w-full py-4 text-white rounded-full mb-2"
              >
                Continue
              </button>
              <SecondaryButton title="Guest Checkout" />
            </div>
          </form>
        </div>

        <div className="w-6/12 h-min ml-auto border border-2 border-gray-200 rounded-3xl p-8">
          <p className="font-bold text-gray-800 text-2xl mb-8">My Cart</p>
          {!cart.length
            ? "Your cart is empty"
            : cart.map((product, i) => <MiniCartItem product={product} />)}
          <div className="flex font-bold text-2xl px-3 my-6">
            <p className="">Total</p>
            <p className="ml-auto">$224</p>
          </div>
          <Link href="./cart">
            <SecondaryButton title="Edit Cart" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const MiniCartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex  items-center p-2 rounded-2xl  shadow-sm border-gray-100">
      <img
        src={product.imgSrc}
        alt=""
        height="96px"
        width="96px"
        className="bg-gray-200 rounded-lg"
      />
      <div className="w-8/12 px-4">
        <p className="font-semibold text-xl ">{product.name}</p>
        <p className="font-semibold text-gray-600 text-md mt-2">
          ${Math.ceil(product.price / 100)}
        </p>
      </div>
      <div>
        <button
          className="rounded-full border border-2 px-4  py-2 border-gray-200 text-gray-800 text-xl hover:bg-gray-300 transition duration-200 hover:text-white"
          onClick={() => dispatch(productRemoved({ product }))}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Checkout;

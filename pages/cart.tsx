import BreadCrumb from "../components/BreadCrumb";

import { useState } from "react";
import { Newsletter, Footer } from "../components";
const cart = () => {
  return (
    <>
      <BreadCrumb />

      <span>Your Cart</span>
      <h3>Shopping Cart</h3>

      {/* begin cart items */}
      <CartItem />
      <CartItem />
      {/* end cart items */}

      {/* begin cart info */}
      <div className="block w-60 border p-8 mt-8 rounded-lg">
        <h3 className="text-center">
          <b>Cart total</b>
        </h3>
        <CartInfoBlock title="Subtotal" price="209" />
        <CartInfoBlock title="Tax" price="20.73" />
        <CartInfoBlock title="Shipping" price="15" />
        <CartInfoBlock title="Total" price="224" />

        <button className="bg-green-500 text-white px-16">Checkout</button>
      </div>
      {/* end cart info */}

      {/* Begin Newsletter */}
      <Newsletter />
      {/*  End newsletter*/}
      {/* Begin Footer */}
      <Footer />
      {/* End Footer */}
    </>
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
    <div className="flex">
      <div>
        <img src="" alt="productImage" />
      </div>
      <div>
        <h3 id="productName">Sleepless Night</h3>
        <h4>$97</h4>
        <ProductCounter count={2} />
      </div>
    </div>
  );
};

const ProductCounter = ({ count }) => {
  const [productCount, setProductCount] = useState<number>(count);
  return (
    <div className="flex px-8 border rounded-lg">
      <button
        onClick={() =>
          setProductCount(productCount <= 0 ? 0 : productCount - 1)
        }
      >
        &minus; &nbsp;
      </button>
      <span>{productCount}</span>
      <button onClick={(e) => setProductCount(productCount + 1)}>
        &nbsp;+
      </button>
    </div>
  );
};

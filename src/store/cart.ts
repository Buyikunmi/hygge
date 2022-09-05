import { createSlice } from "@reduxjs/toolkit";

type product = {
  id: string;
  imgSrc: string;
  category: {
    id: number;
    title: string;
    icon: string;
    color: string;
  };
  price: number;
  name: string;
  discount: number;
  noInCart: number;
};

const initialState: product[] = [
  {
    id: "2131faoiu09809023",
    imgSrc: "../assets/images/products/product-pic-3.png",
    category: {
      id: 3,
      title: "Treatments",
      icon: "0",
      color: "yellow",
    },
    price: 2500,
    name: "Acne Skin Gel",
    discount: 0.1,
    noInCart: 1,
  },
  {
    id: "2131iu09809023",
    imgSrc: "../assets/images/products/product-pic-3.png",
    category: {
      id: 3,
      title: "Treatments",
      icon: "0",
      color: "yellow",
    },
    price: 2500,
    name: "Acne Skin Gel",
    discount: 0.1,
    noInCart: 1,
  },
];

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    productAdded: (cart, action) => {
      cart.push(action.payload.product);
    },
    productRemoved: (cart, { payload }) => {
      console.log("oldCart", ...cart);
      let newCart = cart.filter(
        (cartItem) => payload.product.id !== cartItem.id
      );
      console.log("newcart is :", newCart);
      cart.splice(0, cart.length, ...newCart);
    },
    productCountIncreased: (cart, action) => {
      const { product } = action.payload;
      const index = cart.findIndex((cartItem) => cartItem.id == product.id);
      cart[index].noInCart += 1;
    },
    productCountDecreased: (cart, action) => {
      const { product } = action.payload;
      const index = cart.findIndex((cartItem) => cartItem.id == product.id);
      cart[index].noInCart =
        cart[index].noInCart <= 1 ? 0 : cart[index].noInCart - 1;
    },
    cartEmptied: (cart, action) => {
      cart.splice(0, cart.length, ...[]);
    },
  },
});

export const {
  productAdded,
  productCountIncreased,
  productCountDecreased,
  productRemoved,
  cartEmptied,
} = slice.actions;
export default slice.reducer;

//

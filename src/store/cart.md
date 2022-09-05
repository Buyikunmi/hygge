# Stuff you can do in a cart

1. Add a product in to a cart
2. Remove a product
3. Change the item count of a product

```ts
const product = {
  productDetails: {
    imgSrc: "../assets/images/products/product-pic-1.png",
    category: { id: 4, name: "Sun Care", icon: "0", color: "red" },
    price: 5000,
    name: "Sun Scream",
    discount: 0.2,
  },
  noInCart: 2,
};
```

### A Sample of the Store Object Would look like:

```ts
export const store = {
  theme: "dark",
  categories: [],

  products: [],
  cart: [],
};
```

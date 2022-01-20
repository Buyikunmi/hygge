// the values are set to cents not dollars

type product = {
  _id: string;
  name: string;
  price: number;
  noInStock: number;
  discount: number;
  features: object;
  images: object;
};

export const products = [
  {
    _id: "OIUO234",
    name: "Sun Cream",
    price: 2000,
    discount: 20,
    noInStock: 10,
    categories: ["Sun Care", "Hot Sales"],
    images: [
      "https://google.com/",
      "https://google.com/",
      "https://google.com/",
    ],
    features: [],
  },
];

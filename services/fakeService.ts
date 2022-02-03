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

// export const products: product[]= [
//   {
//     _id: "OIUO234",
//     name: "Sun Cream",
//     price: 2000,
//     discount: 20,
//     noInStock: 10,
//     categories: ["Sun Care", "Hot Sales"],
//     images: [
//       "https://google.com/",
//       "https://google.com/",
//       "https://google.com/",
//     ],
//     features: [],
//   },
// ];

type category = {
  id: number;
  icon: string;
  title: string;
  color: string;
};

const categories: category[] = [
  { id: 1, title: "On Sale", icon: "0", color: "red" },
  { id: 2, title: "Featured", icon: "0", color: "blue" },
  { id: 3, title: "Treatments", icon: "0", color: "yellow" },
  { id: 4, title: "Sun Care", icon: "0", color: "green" },
  { id: 5, title: "Mosturizers", icon: "0", color: "green" },
  { id: 6, title: "Mask", icon: "0", color: "gray" },
  { id: 7, title: "Eye Care", icon: "0", color: "purple" },
  { id: 8, title: "Night Care", icon: "0", color: "green" },
];

export async function getCategories() {
  return categories;
}

const products = [
  {
    imgSrc: "../assets/images/products/product-pic-1.png",
    category: { id: 4, name: "Sun Care", icon: "0", color: "red" },
    price: 5000,
    name: "Sun Scream",
    discount: 0.2,
  },
  {
    imgSrc: "../assets/images/products/product-pic-2.png",
    category: { id: 7, title: "Eye Care", icon: "0", color: "purple" },
    price: 2000,
    name: "Night Eye Cream",
    discount: 0.2,
  },
  {
    imgSrc: "../assets/images/products/product-pic-3.png",
    category: { id: 3, title: "Treatments", icon: "0", color: "yellow" },
    price: 2500,
    name: "Acne Skin Gel",
    discount: 0.1,
  },
  {
    imgSrc: "../assets/images/products/product-pic-4.png",
    category: { id: 5, title: "Mosturizers", icon: "0", color: "green" },
    price: 2700,
    name: "Anti Dry Skin",
    discount: 0.2,
  },
  {
    imgSrc: "../assets/images/products/product-pic-5.png",
    category: { id: 3, title: "Treatments", icon: "0", color: "yellow" },
    price: 1700,
    name: "Baby Protection",
    discount: 0.2,
  },
  {
    imgSrc: "../assets/images/products/product-pic-6.png",
    category: { id: 2, title: "Featured", icon: "0", color: "blue" },

    price: 5000,
    name: "All In One Gel",
    discount: 0.2,
  },
  {
    imgSrc: "../assets/images/products/product-pic-7.png",
    category: { id: 3, title: "Treatments", icon: "0", color: "yellow" },

    price: 1900,
    name: "Body Protection",
    discount: 0.2,
  },
  {
    imgSrc: "../assets/images/products/product-pic-6.png",
    category: { id: 2, title: "Featured", icon: "0", color: "blue" },

    price: 5000,
    name: "All In One Gel",
    discount: 0.2,
  },
];

export async function getProducts() {
  return products;
}

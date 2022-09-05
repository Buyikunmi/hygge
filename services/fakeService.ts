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
  // { id: 4, title: "Sun Care", icon: "0", color: "green" },
  // { id: 5, title: "Mosturizers", icon: "0", color: "green" },
  // { id: 6, title: "Mask", icon: "0", color: "gray" },
  // { id: 7, title: "Eye Care", icon: "0", color: "purple" },
  // { id: 8, title: "Night Care", icon: "0", color: "green" },
];

export async function getCategories() {
  return categories;
}

const products = [
  {
    id: "2131faoiu023ff",
    imgSrc: "../assets/images/products/product-pic-1.png",
    category: { id: 4, name: "Sun Care", icon: "0", color: "red" },
    price: 5000,
    name: "Sun Cream",
    slug: "sun-cream",

    discount: 0.2,
  },
  {
    id: "2131faoiagu023",
    imgSrc: "../assets/images/products/product-pic-2.png",
    category: { id: 7, title: "Eye Care", icon: "0", color: "purple" },
    price: 2000,
    name: "Night Eye Cream",
    slug: "night-eye-cream",

    discount: 0.2,
  },
  {
    id: "213kd41faoiu09809023",
    imgSrc: "../assets/images/products/product-pic-3.png",
    category: { id: 3, title: "Treatments", icon: "0", color: "yellow" },
    price: 2500,
    name: "Acne Skin Gel",
    slug: "acne-skin-gel",

    discount: 0.1,
  },
  {
    id: "2131fu8uoiaoiu023",
    imgSrc: "../assets/images/products/product-pic-4.png",
    category: { id: 5, title: "Mosturizers", icon: "0", color: "green" },
    price: 2700,
    name: "Anti Dry Skin",
    slug: "anti-dry-skin",

    discount: 0.2,
  },
  {
    id: "u0q32323",
    imgSrc: "../assets/images/products/product-pic-5.png",
    category: { id: 3, title: "Treatments", icon: "0", color: "yellow" },
    price: 1700,
    name: "Baby Protection",
    slug: "baby-protection",

    discount: 0.2,
  },
  {
    id: "iu0sss23",
    imgSrc: "../assets/images/products/product-pic-6.png",
    category: { id: 2, title: "Featured", icon: "0", color: "blue" },

    price: 5000,
    name: "All In One Gel",
    slug: "all-in-one-gel",

    discount: 0.2,
  },
  {
    id: "21iu023",
    imgSrc: "../assets/images/products/product-pic-7.png",
    category: { id: 3, title: "Treatments", icon: "0", color: "yellow" },

    price: 1900,
    name: "Body Protection",
    slug: "body-protection",
    discount: 0.2,
  },
  {
    id: "kgljhsfoiu023",
    imgSrc: "../assets/images/products/product-pic-6.png",
    category: { id: 2, title: "Featured", icon: "0", color: "blue" },
    price: 5000,
    name: "All In One Gel",
    slug: "all-in-one-gel1",
    discount: 0.2,
  },
];

const featuredProducts = [
  {
    id: "2131faoiu09809023",
    imgSrc: "../assets/images/products/product-pic-3.png",
    category: { id: 3, title: "Treatments", icon: "0", color: "yellow" },
    price: 2500,
    name: "Acne Skin Gel",
    slug: "acne-skin-gel",

    discount: 0.1,
  },
  {
    id: "2131fu8uoiaoiu023",
    imgSrc: "../assets/images/products/product-pic-4.png",
    category: { id: 5, title: "Mosturizers", icon: "0", color: "green" },
    price: 2700,
    name: "Anti Dry Skin",
    slug: "anti-dry-skin",

    discount: 0.2,
  },
  {
    id: "u0sdf23",
    imgSrc: "../assets/images/products/product-pic-5.png",
    category: { id: 3, title: "Treatments", icon: "0", color: "yellow" },
    price: 1700,
    name: "Baby Protection",
    slug: "baby-protection",

    discount: 0.2,
  },
  {
    id: "2131fao809023",
    imgSrc: "../assets/images/products/product-pic-3.png",
    category: { id: 3, title: "Treatments", icon: "0", color: "yellow" },
    price: 2500,
    name: "Acne Skin Gel",
    discount: 0.1,
  },
  {
    id: "2131fu8uoiaoiu023",
    imgSrc: "../assets/images/products/product-pic-4.png",
    category: { id: 5, title: "Mosturizers", icon: "0", color: "green" },
    price: 2700,
    name: "Anti Dry Skin",
    slug: "anti-dry-skin",

    discount: 0.2,
  },
  {
    id: "uc023",
    imgSrc: "../assets/images/products/product-pic-5.png",
    category: { id: 3, title: "Treatments", icon: "0", color: "yellow" },
    price: 1700,
    name: "Baby Protection",
    slug: "baby-protection",

    discount: 0.2,
  },
];

export async function getFeaturedProducts() {
  return featuredProducts;
}
export async function getProducts() {
  return products;
}
export async function getProduct(slug) {
  try {
    return products.find((product) => product.slug == slug);
  } catch (ex) {
    return {
      id: "u023",
      imgSrc: "../assets/images/products/product-pic-5.png",
      category: { id: 3, title: "Treatments", icon: "0", color: "yellow" },
      price: 1700,
      name: "Baby Protection",
      slug: "baby-protection",

      discount: 0.2,
    };
  }
}

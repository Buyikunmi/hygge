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

type category = {
  id: number;
  icon: string;
  title: string;
};

const categories: category[] = [
  { id: 1, title: "On Sale", icon: "0" },
  { id: 2, title: "Featured", icon: "0" },
  { id: 3, title: "Treatments", icon: "0" },
  { id: 4, title: "Sun Care", icon: "0" },
  { id: 5, title: "Mosturizers", icon: "0" },
  { id: 6, title: "Mask", icon: "0" },
  { id: 7, title: "Eye Care", icon: "0" },
  { id: 8, title: "Night Care", icon: "0" },
];

export async function getCategories() {
  return categories;
}

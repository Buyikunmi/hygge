import { BreadCrumb, ProductWidget } from "../../components";
import { Footer, Newsletter } from "../../sections";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProducts } from "../../../services/fakeService";

type product = {
  imgSrc: string;
  category: {
    id: number;
    name: string;
    icon: string;
    color: string;
    title?: undefined;
  };
  price: number;
  name: string;
  discount: number;
};
const CategoryHomePage = () => {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  });

  return (
    <div className="w-11/12 mx-auto">
      <BreadCrumb />
      <div className="mb-12">
        <p className="italic font-semibold text-blue-500 text-lg ">
          -{router.query.category} Product
        </p>
        <p className="font-bold text-2xl">
          <b>Explore the {router.query.category} Products</b>
        </p>
      </div>

      <div className="flex justify-center">
        {sorts.map((item) => (
          <SortWidget data={item} />
        ))}
      </div>
      <div className="flex justify-center my-3">
        {tags.map((tag) => (
          <div className="flex items-center bg-gray-300 mx-4 px-3 py-2 rounded-full">
            {tag}
            <span className="ml-auto  text-red-300 px-3 hover:cursor-pointer">
              X
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center mt-12 ">
        {products.map((product, i) => (
          <ProductWidget product={product} key={i} />
        ))}
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

const SortWidget = ({ data: { title, options } }) => {
  return (
    <>
      <select
        className=" hover:border-gray-400 transition duration-300 cursor-pointer border-2 border-gray-200 px-4 py-2 m-2 border rounded-full"
        name={title}
        id={title}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

const sorts = [
  {
    title: "Color",
    options: ["Red", "Green", "Blue"],
  },
  {
    title: "Price Range",
    options: ["$0 - $10", "$10-$50", "$50+"],
  },
  {
    title: "Category",
    options: ["Treatments", "Moisturizers", "Featured"],
  },
  {
    title: "Sort By",
    options: ["Color", "Category", "Price Range"],
  },
];

const tags = ["$0 - $10", "Treatments", "Green"];

export default CategoryHomePage;

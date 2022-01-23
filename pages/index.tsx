import { useEffect, useState } from "react";
import Head from "next/head";
import {
  BrandLogo,
  Footer,
  Navbar,
  Newsletter,
  TestimonialsBox,
} from "../components";
import { getCategories } from "../services/fakeService";

type category = {
  id: number;
  icon: string;
  title: string;
};

const CategoryWidget = ({ category: { id, icon, title } }) => {
  return (
    <>
      <div key={id} className="bg-gray-100 rounded-xl p-3 mx-4 mx-w-xl h-30">
        <span className="text-green-500 block text-center">{icon}</span>
        <span className="font-semibold">{title}</span>
      </div>
    </>
  );
};

export default function Home() {
  const [categories, setCategories] = useState<category[]>([]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  });

  return (
    <div className="w-11/12 mx-auto">
      {/* Begin Hero Section */}

      <section id="mobileHeroSection" className="lg:hidden">
        <div id="showOnSmall" className="my-auto">
          <p className="mb-4 font-semibold text-blue-600 italic">
            - Skincare Products
          </p>
          <p id="hero-text" className="text-4xl font-bold text-gray-800">
            We offer the Best <br />
            Products for your Skin
          </p>
          <button
            id="hero-cta"
            className="mt-6 bg-green-500 text-white text-xl font-semibold px-12 py-4 rounded-3xl"
          >
            Shop Now
          </button>
        </div>
      </section>
      <main
        id="hero"
        className="grid grid-cols-2 gap-2 bg-gray-100 rounded-3xl p-12 "
      >
        <div id="leftGrid" className="my-auto">
          <p className="mb-4 font-semibold text-blue-600 italic">
            - Skincare Products
          </p>
          <p id="hero-text" className="text-4xl font-bold text-gray-800">
            We offer the Best <br />
            Products for your Skin
          </p>
          <button
            id="hero-cta"
            className="mt-6 bg-green-500 text-white text-xl font-semibold px-12 py-4 rounded-3xl"
          >
            Shop Now
          </button>
        </div>
        <div>
          <img src="assets/images/main-pic.png" alt="image" />
        </div>
      </main>
      {/* End Hero Section  */}

      {/* Begin Categories Section */}
      {/* <section id="categories" className="mt-8">
        <p className="font-semibold text-blue-600 italic">-The Categories</p>
        <p>Browse by Category</p>
        <div className="flex">
          {categories.map((category, index) => (
            <CategoryWidget category={category} />
          ))}
        </div>
      </section> */}

      {/*  End Categories section */}
      {/* Begin Products Section */}

      <section className="mt-8">
        <div className="sm:text-center lg:text-left mb-8">
          <p className="font-semibold text-blue-600 italic">-Our Products</p>

          <p className="font-bold text-3xl text-gray-800">
            Explore our Products
          </p>
        </div>
        <div id="products" className="flex">
          <div
            id="product"
            className="transition duration-400 ease-in-out visible"
          >
            <div
              id="productImage"
              className="relative px-8 py-5 rounded-3xl bg-gray-100"
            >
              <img src="assets/images/products/product-pic-1.png" alt="" />

              <span
                id="discount"
                className="absolute  font-semibold top-7 -right-7 bg-red-500 text-white rounded-full px-2 py-1"
              >
                20% OFF
              </span>

              <div className=" select-none absolute top-0 left-0  h-full w-full transition duration-450 cursor-pointer  bg-gray-400 bg-opacity-30 rounded-3xl opacity-0 hover:opacity-100 grid place-content-center">
                <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold text-xl">
                  Add to Cart
                </button>
              </div>
            </div>
            <div id="productDetails" className="">
              <p id="productName" className="font-semibold text-xl my-4">
                Sun Cream
              </p>
              <div className="flex">
                <span
                  id="productCategory"
                  className="bg-yellow-50 text-yellow-600 font-semibold px-3 py-1 rounded-xl mr-4"
                >
                  Sun Care
                </span>

                <span id="productPrice" className="font-semibold text-xl">
                  $20
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Products Section */}

      {/* Begin About Us */}
      <section id="why-us">
        <div className="text-center">
          <p className="font-bold text-xl text-blue-600 italic">-why us </p>
          <p className=" font-bold text-2xl text-gray-800">
            Why People Choose Us
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-5 my-8">
          <div id="iconCard" className="bg-gray-100 p-4 rounded-xl text-center">
            <span id="iconCardIcon">favicon</span>
            <p id="iconTitle">Easy Returns</p>
            <p id="iconDetails">
              Our return policy is simple and that is why customers love our
              shop
            </p>
          </div>
          <div id="iconCard" className="bg-gray-100 p-4 rounded-xl text-center">
            <span id="iconCardIcon">favicon</span>
            <p id="iconTitle">Easy Returns</p>
            <p id="iconDetails">
              Our return policy is simple and that is why customers love our
              shop
            </p>
          </div>
          <div id="iconCard" className="bg-gray-100 p-4 rounded-xl text-center">
            <span id="iconCardIcon">favicon</span>
            <p id="iconTitle">Easy Returns</p>
            <p id="iconDetails">
              Our return policy is simple and that is why customers love our
              shop
            </p>
          </div>
        </div>
      </section>

      {/* End Why Us */}

      {/* Begin Testimonials */}

      <TestimonialsBox />
      {/*  End testimonials */}

      {/* Begin Newsletter Section */}

      <Newsletter />
      {/* End Newsletter Section */}

      {/* Begin Footer Section */}
      <Footer />
      {/* End Footer Section */}
    </div>
  );
}

const Categories: React.FC = () => {
  return (
    <div className="p-4 bg-gray-500">
      <span>Category Icon</span>
      <p>Category Name </p>
    </div>
  );
};

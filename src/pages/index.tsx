import { useEffect, useState } from "react";
import Head from "next/head";
import { BrandLogo, Navbar, ProductWidget } from "../components";
import { getCategories, getFeaturedProducts } from "../../services/fakeService";

import { Footer, Newsletter, TestimonialsBox } from "../sections";

import { FaCube } from "react-icons/fa";

import { AiOutlineStar } from "react-icons/ai";

import { BiCube, BiUser } from "react-icons/bi";
import SectionHeader from "../components/SectionHeader";

type category = {
  id: number;
  icon: string;
  title: string;
};

const CategoryWidget = ({ category: { id, icon, title } }) => {
  return (
    <>
      <div
        key={id}
        className="bg-gray-100 py-4 w-[107px] h-[95px] rounded-xl mx-3 text-center"
      >
        <span className="d-block text-green-500 block">{icon}</span>
        <span className="font-semibold">{title}</span>
      </div>
    </>
  );
};

export default function Home() {
  const [categories, setCategories] = useState<category[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
    getFeaturedProducts().then((data) => setFeaturedProducts(data));
  });

  return (
    <div className="w-11/12 mx-auto">
      {/* Begin Hero Section */}

      {/* <section id="mobileHeroSection" className="lg:hidden">
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
      
      
       */}
      <main
        id="hero"
        className="md:grid md:grid-cols-2 gap-2 md:bg-gray-100 rounded-3xl p-12 "
      >
        <div id="leftGrid" className="my-auto">
          <p className="mb-4 font-semibold text-blue-600 italic">
            - Skincare Products
          </p>
          <p id="hero-text" className="md:text-4xl font-bold text-gray-800">
            We offer the Best <br />
            Products for your Skin
          </p>
          <button
            id="hero-cta"
            className="mt-6 bg-green-500 text-white px-3 py-1 md:text-xl font-semibold md:px-12 md:py-4 rounded-3xl"
          >
            Shop Now
          </button>
        </div>
        <div>
          <img
            className="p-4 bg-gray-100 my-4 rounded-[48px] md:w-auto sm:h-auto"
            width="400px"
            height="300px"
            src="assets/images/main-pic.png"
            alt="image"
          />
        </div>
      </main>
      {/* End Hero Section  */}

      {/* Begin Products Section */}

      <section className="mt-8">
        <div className="sm:text-center lg:text-left mb-8">
          <p className="font-semibold text-blue-600 italic">-Our Products</p>

          <p className="font-bold text-3xl text-gray-800">
            Explore our Products
          </p>
        </div>

        <div id="products" className="overflow-x">
          {featuredProducts.map((featuredProduct, i) => (
            <ProductWidget product={featuredProduct} />
          ))}
        </div>
      </section>
      {/* End Products Section */}

      {/* Begin About Us */}
      <section id="why-us">
        <SectionHeader
          title="Why People Choose Us"
          slogan="-why us"
          center={true}
        />
        <div className="lg:grid lg:grid-cols-3 lg:gap-5 my-8">
          <div id="iconCard" className="my-4 p-4 rounded-xl text-center">
            <span id="iconCardIcon">
              <BiCube
                size={60}
                className="bg-gray-50
              p-3  rounded-full mx-auto"
              />
            </span>

            <p id="iconTitle" className="font-semibold mb-2">
              Easy Returns
            </p>
            <p id="iconDetails">
              Our return policy is simple and that is why customers love our
              shop
            </p>
          </div>
          <div id="iconCard" className="p-4  my-4 rounded-xl text-center">
            <span id="iconCardIcon">
              <BiUser size={60} className=" p-3 rounded-full mx-auto" />
            </span>
            <p id="iconTitle" className="font-semibold mb-2">
              Customer Service
            </p>
            <p id="iconDetails">
              We offer amazing customer service no matter what happens.
            </p>
          </div>
          <div
            id="iconCard"
            className=" bg-gray-50 my-4 p-4 rounded-xl text-center"
          >
            <span id="iconCardIcon">
              <AiOutlineStar
                size={60}
                className="bg-gray-50 
              p-3 rounded-full mx-auto"
              />
            </span>
            <p id="iconTitle" className="font-semibold mb-2">
              High Quality
            </p>
            <p id="iconDetails">
              All of our products go through very strict inspection before we
              dispatch them.
            </p>
          </div>
        </div>
      </section>

      {/* End Why Us */}

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

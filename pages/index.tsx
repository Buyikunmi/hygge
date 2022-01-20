import Head from "next/head";
import {
  BrandLogo,
  Footer,
  Navbar,
  Newsletter,
  TestimonialsBox,
} from "../components";

export default function Home() {
  return (
    <>
      {/* Begin Hero Section */}
      <main id="hero">
        <p>Skincare Products</p>
        <p id="hero-text"></p>
        <button id="hero-cta">Shop Now</button>
      </main>
      {/* End Hero Section  */}

      {/* Begin Categories Section */}
      <section id="categories">
        <p>The Categories</p>
        <p>Explore our Products</p>
        <div className="flex"></div>
      </section>

      {/*  End Categories section */}
      {/* Begin Products Section */}

      <section>
        <p>Our Products</p>

        <p>Explore our Products</p>

        <div id="products" className="flex">
          <div id="product">
            <div
              id="productImage"
              className="p-5 border rounded-xl bg-gray-400"
            >
              Product Image
              <span id="discount" className="bg-red-500 text-white">
                20% OFF
              </span>
            </div>
            <div id="productDetails">
              <p id="productName">Sun Cream</p>
              <div className="flex">
                <span id="productCategory">Sun Care</span>

                <span id="productPrice">20</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Products Section */}

      {/* Begin About Us */}
      <section id="why-us">
        <div className="text-center">
          <span>why us </span>
          <p>Why People Choose Us</p>
        </div>
        <div className="flex">
          <div id="iconCard">
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
      {/* Begin Blog Section */}

      <span>Our Blog</span>
      <p>Check Out our Blog</p>
      {/* Begin Blog-post Card */}
      <div id="blog-card">
        <div id="blog-card-image">
          <img src="#" alt="blog-image" />
        </div>
        <p id="post-title">Morning Skincare Routine:10 Top Tips for you</p>
        <p id="post-category">TOP TIPS</p>
      </div>
      {/* End Blog-post Card */}
      <button className="bg-green-500 text-white p-2 rounded-xl text-center">
        View All
      </button>
      {/* End Blog Section */}

      {/* Begin Newsletter Section */}

      <Newsletter />
      {/* End Newsletter Section */}

      {/* Begin Footer Section */}
      <Footer />
      {/* End Footer Section */}
    </>
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

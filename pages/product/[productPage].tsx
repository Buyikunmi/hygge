import { useRouter } from "next/router";

import { useState } from "react";
import {
  BreadCrumb,
  Footer,
  Newsletter,
  TestimonialsBox,
} from "../../components";

const ProductPage = () => {
  let [productCount, setProductCount] = useState<number>(0);
  const router = useRouter();

  console.log(router);

  return (
    <>
      {/* Begin Breadcrumb Section */}

      <BreadCrumb />
      {/* End Breadcrumb Section  */}
      {/* Begin product preview section */}

      <section>
        <div className="flex">
          <div id="productImages" className="d-block">
            <div className="p5 bg-gray-500 my-2 w-1/4">image</div>
            <div className="p5 bg-gray-500 my-2 w-1/4 ">image</div>
            <div className="p5 bg-gray-500 my-2 w-1/4 ">image</div>
          </div>

          <div id="productPreviewBox">
            <img
              src=""
              alt="preview box"
              className="bg-gray-400"
              width={140}
              height={280}
            />
            <span id="discountPrice" className="bg-red-400 p-3 rounded-xl">
              20% OFF
            </span>
          </div>

          <div id="productDetails">
            <span>-Selling Fast</span>

            <h2 id="productName">Sun Cream</h2>

            <div className="d-inline">
              <span id="productCategory">SUN CARE</span>
              <span id="productPrice">
                $30 <span id="discountPrice">$20</span>
              </span>
            </div>
            <div>
              <span id="productId">SKU : 123456789</span>
            </div>

            <div id="productCartOptions">
              <div className="d-inline">
                <button
                  className="bg-gray-400 hover:bg-gray-600 p-4 mx-2"
                  onClick={() =>
                    setProductCount(productCount <= 0 ? 0 : --productCount)
                  }
                >
                  &minus;
                </button>
                <span id="productCount">{productCount}</span>
                <button
                  className="bg-gray-400 hover:bg-gray-600 p-4 mx-2"
                  onClick={() => setProductCount(++productCount)}
                >
                  +
                </button>
                <button className="bg-green-500 text-white ml-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End product preview section */}

      {/* Begin product features section */}

      <section id="productFeatures">
        <div className="flex">
          <div id="sectionTitle">
            <span>-Product Features</span>
            <h2>Explore the Features </h2>
          </div>

          <div className="align-right">
            {productFeatures.map((feature, id) => (
              <div key={id}>
                <span id="featureIcon" className="bg-blue-400 ">
                  {feature.icon}
                </span>

                <div className="d-block">
                  <p id="featureTitle">{feature.title}</p>
                  <p id="featureDesc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End product features section */}
      {/* Begin testimonials section */}
      <TestimonialsBox />
      {/* End testimonials section*/}
      {/* Begin newsletter section  */}
      <Newsletter />
      {/* End newsletter section */}
      {/* Begin Footer Section */}
      <Footer />
      {/* End Footer Section */}
    </>
  );
};
const productFeatures = [
  {
    icon: "book",
    title: "Natural",
    desc: "We are using natural ingredients only when creating our products",
  },
  {
    icon: "book",
    title: "Full Protection",
    desc: "This product provides broad specrum SPF 50 and blue light protection.",
  },
  {
    icon: "Trending",
    title: "Trending",
    desc: "It is one of our most popular products that we have on offer.",
  },
];

export default ProductPage;

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
    <div className="w-11/12 mx-auto">
      {/* Begin Breadcrumb Section */}

      <BreadCrumb />
      {/* End Breadcrumb Section  */}
      {/* Begin product preview section */}

      <section>
        <div className="flex">
          <div id="productImages" className="d-block mr-8">
            {[...new Array(3)].map((image) => (
              <div
                key={Math.random()}
                className="hover:cursor-pointer hover:bg-gray-200 transition duration-200 p-auto w-max bg-gray-100 rounded-2xl my-2"
              >
                <img
                  src="../assets/images/card-pic-1.png"
                  alt="product-pic-1"
                  width="148px"
                  height="148px"
                />
              </div>
            ))}
          </div>

          <div id="productPreviewBox" className="relative w-full mr-8">
            <img
              src="../assets/images/card-pic-1.png"
              alt="preview box"
              className="bg-gray-100 rounded-2xl "
              height={504}
            />
            <span
              id="discountPrice"
              className="bg-red-600 font-bold text-white px-4 py-2 rounded-full absolute top-11 -right-11"
            >
              20% OFF
            </span>
          </div>

          <div id="productDetails" className="container px-5 pt-12 ml-8 ">
            <p className="font-semibold text-blue-500 italic pb-8">
              -Selling Fast
            </p>

            <h2 id="productName" className="font-bold text-3xl">
              Sun Cream
            </h2>

            <div className="d-inline my-6 flex align-items-center ">
              <span
                id="productCategory"
                className="bg-yellow-100 text-yellow-600  font-bold px-3 py-2 rounded-full mr-8"
              >
                SUN CARE
              </span>
              <span id="productPrice">
                <span className="text-gray-500 mr-3 text-lg"> $30 </span>
                <span id="discountPrice" className="font-bold text-2xl">
                  $20
                </span>
              </span>
            </div>
            <div>
              <p id="productId" className="font-semibold mb-8">
                SKU : <span className="text-gray-400">123456789</span>
              </p>
            </div>

            <div className="flex">
              {" "}
              <div id="productCounter" className="border rounded-full w-max">
                <button
                  onClick={() =>
                    setProductCount(productCount <= 0 ? 0 : productCount - 1)
                  }
                  className="hover:bg-gray-200 active:bg-gray-300 transition duration-300 text-lg font-semibold pl-2 py-2 rounded-tl-full rounded-bl-full"
                >
                  &minus; &nbsp;
                </button>
                <span className="px-4">{productCount}</span>
                <button
                  onClick={(e) => setProductCount(productCount + 1)}
                  className="hover:bg-gray-200 active:bg-gray-300 transition duration-300 text-lg font-semibold px-2 py-2 rounded-tr-full rounded-br-full"
                >
                  &nbsp;+
                </button>
              </div>
              <button className="ml-4 bg-green-500 px-3 py-2 rounded-full font-bold text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* End product preview section */}

      {/* Begin product features section */}

      <section id="productFeatures" className="bg-gray-200  my-16 p-5 py-8 ">
        <div className="grid grid-cols-2 gap-4">
          <div id="sectionTitle">
            <span className="font-semibold text-lg italic text-blue-600">
              -Product Features
            </span>
            <p className="font-bold text-4xl ">Explore the Features</p>
          </div>

          <div className="align-right">
            {productFeatures.map((feature, id) => (
              <div key={id} className="flex mb-8">
                <span id="featureIcon" className="bg-blue-400  mr-4 h-min ">
                  {feature.icon}
                </span>

                <div className="d-block">
                  <p id="featureTitle" className="text-lg font-bold">
                    {feature.title}
                  </p>
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
    </div>
  );
};
const productFeatures = [
  {
    icon: "icon",
    title: "Natural",
    desc: "We are using natural ingredients only when creating our products",
  },
  {
    icon: "icon",
    title: "Full Protection",
    desc: "This product provides broad specrum SPF 50 and blue light protection.",
  },
  {
    icon: "icon",
    title: "Trending",
    desc: "It is one of our most popular products that we have on offer.",
  },
];

export default ProductPage;

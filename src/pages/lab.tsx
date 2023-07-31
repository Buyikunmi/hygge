const product = {
  id: "2131faoiu09809023",
  imgSrc: "../assets/images/products/product-pic-3.png",
  category: { id: 3, title: "Treatments", icon: "0", color: "yellow" },
  price: 2500,
  name: "Acne Skin Gel",
  slug: "acne-skin-gel",

  discount: 0.1,
};

import { MobileProductWidget } from "../components";

export default function lab() {
  return (
    <>
      <MobileProductWidget product={product} />
    </>
  );
}

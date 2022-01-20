import { BreadCrumb, Footer, Newsletter } from "../../components";

const category = () => {
  return (
    <div>
      <BreadCrumb />
      <span>
        <i>-Eye Care Product</i>
      </span>
      <h2>
        <b>Explore the Eye Care Products</b>
      </h2>

      <div className="flex">
        {sorts.map((item) => (
          <SortWidget data={item} />
        ))}
      </div>
      {/* Beging newsletter */}
      <Newsletter />
      {/* End newsetter */}
      {/* begin footer */}
      <Footer />
      {/* end footer */}
    </div>
  );
};

export default category;
const SortWidget = ({ data: { title, options } }) => {
  return (
    <>
      <select name={title} id={title}>
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

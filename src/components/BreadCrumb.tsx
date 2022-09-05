import { useRouter } from "next/router";

const BreadCrumb = () => {
  const router = useRouter();
  const paths = router.asPath.split("/").map((e) => {
    if (e == "") return "Home";
    else {
      let res = e[0].toUpperCase();
      return res + e.slice(1);
    }
  });
  const path = ["Home"];
  return (
    <>
      <div id="breadcrumb">
        {paths.map((el, i) => (
          <span key={i}>{`${el}`} &gt;</span>
        ))}
      </div>
    </>
  );
};

export default BreadCrumb;

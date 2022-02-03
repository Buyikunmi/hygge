import { BrandLogo } from "./Navbar";

const Footer = () => {
  return (
    <footer className="mt-20 lg:grid lg:grid-cols-4 lg:gap-4 sm:text-center md:text-left mb-16">
      <div id="menu0" className="text-center">
        <div className="mt-16 mx-auto w-max">
          <BrandLogo />
        </div>
        <div className="mt-4 ">
          <span className=" mt-4">&copy; 2020 - All rights reserved</span>
          <div id="socialIcons" className="mt-2">
            IG TW FB
          </div>
          <div id="themeSwitcher" className="mt-2">
            <button className="bg-green-500 text-white px-8 py-3 rounded-full">
              Night Mode
            </button>
          </div>
        </div>
      </div>
      {menus.map((menu, index) => (
        <MenuWidget key={index} menu={menu} />
      ))}
    </footer>
  );
};

type menuitem = {
  hideOnMobile: boolean;
  menuTitle: string;
  items: string[];
};
const menus: menuitem[] = [
  {
    hideOnMobile: true,
    menuTitle: "Categories",
    items: [
      "Featured",
      "Masks",
      "Eye Care",
      "Mositurizers",
      "Treatements",
      "Night Care",
      "Sun Care",
    ],
  },
  {
    hideOnMobile: true,
    menuTitle: "Legal",
    items: [
      "Terms of service",
      "Privacy Policy",
      "Return Policy",
      "Shipping",
      " Data Protection",
    ],
  },
  {
    hideOnMobile: true,
    menuTitle: "Company",
    items: ["About", "Team", "Contact", "Career", "Vision", "Culture"],
  },
];

const MenuWidget = ({ menu: { hideOnMobile, menuTitle, items } }) => {
  return (
    <>
      <div
        id={menuTitle + "-menu"}
        className={hideOnMobile ? "hidden md:contents" : ""}
      >
        <ul className="">
          <li className="font-bold text-2xl text-gray-800 pb-3">{menuTitle}</li>

          {items.map((item, index) => (
            <li key={index} className="pb-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Footer;

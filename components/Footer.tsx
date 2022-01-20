import { BrandLogo } from "./Navbar";

const Footer = () => {
  return (
    <footer className="flex">
      <div id="comanyInfo">
        <BrandLogo />
        &copy; 2020 - All rights reserved
        <div id="socialIcons">IG TW FB</div>
        <div id="themeSwitcher">
          <button className="bg-green-500 text-white">Night Mode</button>
        </div>
      </div>

      <div id="menu1">
        <p>Categories</p>
        <ul>
          <li>On Sale</li>
          <li>Featured</li>
          <li>Masks</li>
          <li>Eye Care</li>
          <li>Mositurizers</li>
          <li>Treatments</li>
          <li>Night Care</li>
          <li>Sun Care</li>
        </ul>
      </div>

      <div id="menu2">
        <p>Legal</p>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Return Policy</li>
        <li>Shipping</li>
        <li>Data Protection</li>
      </div>

      <div id="menu3">
        <p>Company</p>
        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
          <li>Career</li>
          <li>Vision</li>
          <li>Culture</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

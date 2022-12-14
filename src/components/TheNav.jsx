import { Link } from "react-router-dom";
import AppButton from "./AppButton";
import { AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import NavLinks from "./NavLinks";

const TheNav = ({ toggle }) => {
  return (
    <nav className="h-40 md:flex items-center justify-between bg-zinc-900 md:h-24 md:text-lg">
      <span className="ml-4 hidden md:block">
        <Link to="/">
          <img
            src="./maharlika-logo.png"
            loading="lazy"
            alt="Maharlika Women's Association of Calgary"
            className="block h-28 w-auto"
          />
        </Link>
      </span>
      {/** Mobile Nav */}
      <div className="flex w-full justify-between md:hidden">
        <div className="ml-2 mt-2 mb-2">
          <Link to="/">
            <img
              src="./maharlika-logo.png"
              loading="lazy"
              alt="Maharlika Women's Association of Calgary"
              className="block h-20 w-auto"
            />
          </Link>
        </div>
        <div onClick={toggle} className="my-8 mr-4 cursor-pointer">
          <AiOutlineMenu color="white" size={30} />
        </div>
      </div>
      <div className="flex justify-center md:hidden">
        <div>
          <Link to="https://donate.stripe.com/test_6oE7v4cFade9aYMcMM">
            <AppButton text="Donate" />
          </Link>
        </div>
      </div>
      {/**End Mobile Nav */}
      <ul className="hidden md:flex items-center space-x-12 mx-4 text-white">
        <li className="font-navLinks text-2xl hover:text-yellow-300">
          <Link to="/about">About</Link>
        </li>
        <NavLinks />
        <li>
          <Link to="https://donate.stripe.com/test_6oE7v4cFade9aYMcMM">
            <AppButton text="Donate" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TheNav;

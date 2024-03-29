import { useState } from "react";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/links";
import Logo from "/logo.png";

const TheSidebar = ({ istoggle, toggle }) => {
  const [title, setTitle] = useState("");

  const showSubLinks = (link) => {
    title !== link ? setTitle(link) : setTitle("");
  };

  const activeLink = ({ isActive }) => (isActive ? "text-yellow-300" : "");

  return (
    <aside
      istoggle={istoggle}
      className={`fixed z-50 w-full h-full bg-zinc-900 grid items-center top-0 left-0 ease-in-out ${
        istoggle ? "opacity-100" : "opacity-0"
      } ${istoggle ? "top-0" : "-top-full"} `}
    >
      <div className="absolute cursor-pointer top-2 left-2">
        <Link to="/" onClick={toggle}>
          <img
            src={Logo}
            loading="lazy"
            alt="Maharlika Women's Association of Calgary"
            className="block h-20 w-auto"
          />
        </Link>
      </div>
      <div className="absolute cursor-pointer top-5 right-6" onClick={toggle}>
        <AiOutlineClose color="white" size={30} />
      </div>

      <div className="text-white text-center space-y-10">
        <div className="text-3xl hover:text-yellow-300 font-navLinks">
          <NavLink className={activeLink} to="/about" onClick={toggle}>
            About
          </NavLink>
        </div>
        {links.map((link) => (
          <div key={link.title}>
            <h1
              className="text-3xl hover:text-yellow-300 font-navLinks cursor-pointer flex justify-center items-center"
              onClick={() => showSubLinks(link.title)}
            >
              {link.title}
              <span className="pl-2">
                <AiOutlineDown size={20} />
              </span>
            </h1>
            <div className={`${title === link.title ? "md:hidden" : "hidden"}`}>
              {link.subLinks.map((subLink) => (
                <div
                  className="my-6 font-texts hover:text-yellow-200"
                  key={subLink.text}
                >
                  <NavLink
                    className={activeLink}
                    to={subLink.link}
                    onClick={toggle}
                  >
                    {subLink.text}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default TheSidebar;

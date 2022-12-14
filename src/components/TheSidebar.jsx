import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { links } from "../data/links";

const TheSidebar = ({ istoggle, toggle }) => {
  return (
    <aside
      istoggle={istoggle}
      onClick={toggle}
      className={`fixed z-50 w-full h-full bg-zinc-900 grid items-center top-0 left-0 ease-in-out ${
        istoggle ? "opacity-100" : "opacity-0"
      } ${istoggle ? "top-0" : "-top-full"} `}
    >
      <div className="absolute cursor-pointer top-5 right-6">
        <AiOutlineClose color="white" size={45} />
      </div>

      <div className="text-white text-center">
        {links.map((link) => (
          <div key={link.title}>
            <h1 className="text-3xl text-yellow-300 underline underline-offset-8cfont-navLinks font-navLinks">
              {link.title}
            </h1>
            {link.subLinks.map((subLink) => (
              <div className="my-2" key={subLink.text}>
                <Link
                  className="hover:text-yellow-200"
                  to={subLink.link}
                  onClick={toggle}
                >
                  {subLink.text}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default TheSidebar;

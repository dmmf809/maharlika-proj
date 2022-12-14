import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { links } from "../data/links";

const NavLinks = () => {
  const [title, setTitle] = useState("");

  const showSubLinks = (link) => {
    title !== link ? setTitle(link) : setTitle("");
  };

  const activeLink = ({ isActive }) => (isActive ? "text-yellow-300" : "");

  return (
    <>
      {links.map((link) => (
        <div key={link.title}>
          <div className="text-left md:cursor-pointer  group">
            <h1
              className="py-7 font-navLinks text-2xl hover:text-yellow-300 flex justify-center items-center"
              onClick={() => showSubLinks(link.title)}
            >
              {link.title}
              <span className="pl-2">
                <AiOutlineDown size={20} />
              </span>
            </h1>
            {link.showSubLinks && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block z-50">
                  <div className="pt-5 pb-3">
                    <span className="w-4 h-4 left-3 absolute mt-1 bg-zinc-900 rotate-45"></span>
                  </div>
                  <div className="bg-zinc-900 p-5 ">
                    {link.subLinks.map((subLink) => (
                      <li
                        className="font-texts hover:text-yellow-200 my-2.5"
                        key={subLink.text}
                      >
                        <NavLink className={activeLink} to={subLink.link}>
                          {subLink.text}
                        </NavLink>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;

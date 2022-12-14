import { Link } from "react-router-dom";
import { links } from "../data/links";

const NavLinks = () => {
  return (
    <>
      {links.map((link) => (
        <div key={link.title}>
          <div className="px-3 text-left md:cursor-pointer  group">
            <h1 className="py-7 font-navLinks text-2xl hover:text-yellow-300">
              {link.title}
            </h1>
            {link.showSubLinks && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block z-50">
                  <div className="pt-5 pb-3">
                    <span className="w-4 h-4 left-3 absolute mt-1 bg-zinc-900 rotate-45"></span>
                  </div>
                  <div className="bg-zinc-900 p-5 ">
                    {link.subLinks.map((subLink) => (
                      <li className="text-sm my-2.5" key={subLink.text}>
                        <Link
                          className="hover:text-yellow-200"
                          to={subLink.link}
                        >
                          {subLink.text}
                        </Link>
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

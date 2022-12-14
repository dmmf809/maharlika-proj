import React from "react";
import { Link } from "react-router-dom";
import { links } from "../data/links";
import SocialLinks from "./SocialLinks";
import Sponsors from "./Sponsors";

const TheFooter = () => {
  return (
    <footer>
      <div className="hidden md:flex justify-between bg-indigo-900 px-12 py-8 text-white">
        <div className="flex space-x-12">
          {links.map((items, i) => (
            <div key={i} className="space-y-2">
              <h3 className="border-b-[1px] w-28">{items.title}</h3>
              {items.subLinks.map((subLinks) => (
                <div key={subLinks.text}>
                  <Link to={subLinks.link}>{subLinks.text}</Link>
                </div>
              ))}
            </div>
          ))}
        </div>
        <Sponsors />
      </div>
      <div className="bg-zinc-500 md:bg-indigo-900 text-white font-texts">
        <p className="md:hidden text-center text-sm pt-4">
          More questions? Visit our socials:
        </p>
        <SocialLinks />
        <p className="text-center p-2 md:text-lg text-sm">
          &copy; 2022 Maharlika Women's Association Calgary
        </p>
      </div>
    </footer>
  );
};

export default TheFooter;

import React from "react";
import { BsFacebook } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-3 pt-2">
      <Link
        to="https://www.facebook.com/groups/231481105327695"
        className=" hover:text-yellow-300"
      >
        <BsFacebook size={20} />
      </Link>
      <HashLink to="/#contact" className=" hover:text-yellow-300" smooth>
        <HiMail size={25} />
      </HashLink>
    </div>
  );
};

export default SocialLinks;

import React from "react";
import { BsFacebook } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-3 pt-2">
      <BsFacebook size={20} />
      <HiMail size={25} />
    </div>
  );
};

export default SocialLinks;

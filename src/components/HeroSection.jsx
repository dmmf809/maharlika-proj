import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/images/hero-images/dancing.jpg";

const HeroSection = () => {
  return (
    <div className="w-full relative">
      <div className="w-full h-full top-0 left-0 absolute opacity-50 bg-black"></div>
      <div className="w-full h-full flex flex-col justify-center items-start p-9 md:pl-28 absolute top-0 left-0">
        <h1 className="w-full text-center text-5xl md:text-7xl font-bold text-[#D1C776] font-heroTitle">
          Maharlika Diva Dancers
        </h1>
        <div className="w-full text-center mt-8 md:mt-12">
          <Link className="bg-blue-600 text-white p-2 px-6 md:p-2 md:px-10 text-sm md:text-xl hover:text-black cursor-pointer">
            View Events
          </Link>
        </div>
      </div>
      <img
        src={HeroImage}
        alt="Maharlika Divas dancing"
        className="object-cover max-h-screen w-full"
      />
    </div>
  );
};

export default HeroSection;

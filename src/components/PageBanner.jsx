import Banner from "../assets/images/page-banner/who-we-are.jpg";

const PageBanner = () => {
  return (
    <header className="w-full relative">
      <img
        src={Banner}
        alt="Group photo with christmas outfits"
        className="object-cover max-h-60 md:w-5/6 md:mx-auto"
      />
    </header>
  );
};

export default PageBanner;

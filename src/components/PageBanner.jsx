const PageBanner = (props) => {
  return (
    <header className="w-full relative">
      <img
        src={props.image}
        alt={props.alt}
        className="object-cover max-h-60 md:w-5/6 mx-auto"
      />
    </header>
  );
};

export default PageBanner;

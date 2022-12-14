import { sponsors } from "../data/sponsors";

const Sponsors = () => {
  return (
    <div className="flex  items-center">
      Sponsors:
      {sponsors.map((images, i) => (
        <span key={i}>
          <img className="max-h-16 m-2" src={images.img} alt={images.alt} />
        </span>
      ))}
    </div>
  );
};

export default Sponsors;

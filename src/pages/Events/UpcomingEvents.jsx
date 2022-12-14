import PageBanner from "../../components/PageBanner";
import Banner from "../../assets/images/page-banner/upcoming-events.jpg";

const Events = () => {
  return (
    <>
      <PageBanner image={Banner} alt="Benefit concert group photo" />
      <article className="my-10">
        <h1 className="text-center font-heading">Upcoming Events</h1>
        <div></div>
      </article>
    </>
  );
};

export default Events;

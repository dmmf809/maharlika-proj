import HeroSection from "../../components/HeroSection";
import Image1 from "../../assets/images/recent-events/maharlika-christmas.jpg";
import ContactForm from "../../components/ContactForm";

const Home = () => {
  return (
    <>
      <HeroSection />
      <article className="my-16">
        <h1 className="text-2xl md:text-4xl text-center font-heading">
          Recent Events
        </h1>
        <div className="flex flex-wrap justify-center items-center ">
          <section className="m-6">
            <img
              src={Image1}
              alt="FCWC Christmas Event"
              className="max-w-sm md:max-w-lg p-4 mx-auto"
            />
            <div className="max-w-prose mx-4 md:text-lg">
              <h3 className="font-semibold text-center mb-2">
                FCWC Christmas Event
              </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur doloremque magnam quas ut iste, ipsam consectetur
                non officiis, ducimus corporis nisi veniam eveniet molestias.
                Velit quasi earum amet distinctio quam cum nesciunt. Ea ex dolor
                est ipsa suscipit porro, iusto reiciendis fugiat, a totam esse,
                hic soluta molestiae inventore nihil.
              </p>
            </div>
          </section>
          <section className="m-4">
            <img
              src={Image1}
              alt="FCWC Christmas Event"
              className="max-w-sm md:max-w-lg p-4 mx-auto"
            />
            <div className="max-w-prose mx-4  md:text-lg">
              <h3 className="font-semibold text-center mb-2">
                FCWC Christmas Event
              </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur doloremque magnam quas ut iste, ipsam consectetur
                non officiis, ducimus corporis nisi veniam eveniet molestias.
                Velit quasi earum amet distinctio quam cum nesciunt. Ea ex dolor
                est ipsa suscipit porro, iusto reiciendis fugiat, a totam esse,
                hic soluta molestiae inventore nihil.
              </p>
            </div>
          </section>
        </div>
      </article>
      <ContactForm />
    </>
  );
};

export default Home;

import HeroSection from "../../components/HeroSection";
import ContactForm from "../../components/ContactForm";
import supabase from "../../config/supabaseClient";
import { useEffect, useState } from "react";

const Home = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [recentEvent, setRecentEvent] = useState(null);

  useEffect(() => {
    const getRecentEvent = async () => {
      const { data, error } = supabase.storage
        .from("maharlika-photos")
        .getPublicUrl("recent-events/maharlika-christmas.jpg");

      if (data !== null) {
        setRecentEvent(data);
        setErrorMsg("");
      } else {
        setErrorMsg("Logo can't be loaded at the moment. Sorry");
        console.error(error);
      }
    };

    getRecentEvent();
  }, []);

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
              src={recentEvent?.publicUrl}
              alt="FCWC Christmas Event"
              className="max-w-sm md:max-w-lg p-4 mx-auto"
            />
            <div className="max-w-prose mx-4 md:text-lg">
              <h3 className="font-semibold text-center mb-2">
                FCWC Christmas Event
              </h3>
            </div>
          </section>
        </div>
      </article>
      <ContactForm />
    </>
  );
};

export default Home;

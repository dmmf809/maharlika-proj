import { useEffect, useState } from "react";
import Banner from "../../assets/images/page-banner/sayaw-maharlika.jpg";
import PageBanner from "../../components/PageBanner";
import supabase from "../../config/supabaseClient";

const PreviousEvents = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [prevEvents, setPrevEvents] = useState("");

  useEffect(() => {
    const getPrevEvents = async () => {
      const { data, error } = await supabase.from("previousEvents").select();

      if (data !== null) {
        setPrevEvents(data);
      } else {
        setErrorMsg("Previous events can't be loaded at the moment. Sorry");
        console.error(error);
      }
    };
    getPrevEvents();
  }, []);

  return (
    <>
      <PageBanner image={Banner} alt="Benefir concert group photo" />
      <article className="my-10">
        <h1 className="text-2xl md:text-4xl text-center font-heading">
          Previous Events
        </h1>
        <div className="flex flex-wrap justify-center items-center md:mx-60 mt-6">
          {errorMsg && <p>{errorMsg}</p>}
          {prevEvents &&
            prevEvents.map((event) => (
              <div key={event.id}>
                <div className="pt-1.5 px-1.5 md:pt-2 md:px-4">
                  <img
                    src={event.eventDetails}
                    alt={event.eventName}
                    className="w-full h-52 md:h-72"
                  />
                </div>
                <div className="text-center py-4">{event.eventName}</div>
              </div>
            ))}
        </div>
      </article>
    </>
  );
};

export default PreviousEvents;

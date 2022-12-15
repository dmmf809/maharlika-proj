import { useEffect, useState } from "react";
import PageBanner from "../../components/PageBanner";
import supabase from "../../config/supabaseClient";
import svg from "/holidays.svg";

const Events = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [upcomingImg, setupcomingImg] = useState(null);

  useEffect(() => {
    const getUpcomingImg = async () => {
      const { data, error } = await supabase
        .from("pageBanners")
        .select()
        .eq("id", 3)
        .single();

      if (data !== null) {
        setupcomingImg(data);
      } else {
        setErrorMsg(
          "Page banner/hero image can't be loaded at the moment. Sorry"
        );
        console.error(error);
      }
    };

    getUpcomingImg();
  }, []);

  return (
    <>
      {errorMsg && <div className="min-h-screen text-center">{errorMsg}</div>}
      {upcomingImg && (
        <PageBanner
          image={upcomingImg.imgSrc}
          alt="Benefit concert group photo"
        />
      )}

      <article className="my-10">
        <h1 className="text-2xl md:text-4xl text-center m-6 font-heading">
          Upcoming Events
        </h1>
        <div className="text-center text-xl pt-4">
          <span>No events at the moment. Enjoy your Holidays!</span>
          <div className="flex justify-center items-center py-16 md:4">
            <img src={svg} alt="Christmas tree" className="h-72 md:h-96" />
          </div>
        </div>
      </article>
    </>
  );
};

export default Events;

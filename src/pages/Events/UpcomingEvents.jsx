import { useEffect, useState } from "react";
import PageBanner from "../../components/PageBanner";
import supabase from "../../config/supabaseClient";

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
        <h1 className="text-center font-heading">Upcoming Events</h1>
        <div></div>
      </article>
    </>
  );
};

export default Events;

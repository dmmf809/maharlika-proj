import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const Sponsors = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [sponsorsData, setSponsorsData] = useState(null);

  useEffect(() => {
    const getSponsors = async () => {
      const { data, error } = await supabase.from("sponsors").select();

      if (data !== null) {
        setSponsorsData(data);
      } else {
        setErrorMsg("Sponsors can't be loaded at the moment. Sorry");
        console.error(error);
      }
    };

    getSponsors();
    console.log(sponsorsData);
  }, []);

  return (
    <div className="flex items-center">
      Sponsors:Data
      {errorMsg && <p>{errorMsg}</p>}
      {sponsorsData &&
        sponsorsData.map((sponsor) => (
          <span key={sponsor.id}>
            <img
              className="max-h-16 m-2"
              src={sponsor.sponsorImg}
              alt={sponsor.sponsorName}
            />
          </span>
        ))}
    </div>
  );
};

export default Sponsors;

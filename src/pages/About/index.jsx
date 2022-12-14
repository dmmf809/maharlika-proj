import PageBanner from "../../components/PageBanner";
import Banner from "../../assets/images/page-banner/who-we-are.jpg";
import Member1 from "../../assets/images/members/member-1.jpg";
import { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";

const WhoWeAre = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [images, setImages] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      const { data, error } = await supabase.from("members").select();

      if (data !== null) {
        setImages(data);
      } else {
        setErrorMsg("Images can't be loaded at the moment. Sorry");
        console.error(error);
      }
    };

    getImages();
  }, []);

  return (
    <>
      <PageBanner image={Banner} alt="Group photo with Christmas outfits" />
      <article className="my-10">
        <div className="min-h-screen">
          <div className="flex flex-col justify-center items-center">
            <section>
              <h1 className="text-2xl md:text-4xl text-center m-6 font-heading">
                Who We Are
              </h1>
              <p className="max-w-prose m-6 md:text-lg ">
                Maharlika Divas Dance group is registered as a non-profit
                organication named under Maharlika Women's Association of
                Calgary founded by Cynthia Lacey. The group dances cultural and
                modern dance. Recently Maharlika Divas had their successful
                concert last October 22, 2022. All members are volunteer and
                they are not professional dancers, they just want to enjoy and
                share their talent in the community and different events.
              </p>
            </section>
            <section>
              <h1 className="text-center m-6 text-2xl md:text-4xl font-heading">
                Founder
              </h1>
              <img
                src={Member1}
                alt="Founder: Cynthia Lacey"
                className="w-full h-96"
              />
              <div className="text-center mb-6 mt-2">Name</div>
            </section>
          </div>
          <section>
            <h2 className="text-xl md:text-3xl text-center m-6 font-heading">
              Members
            </h2>
            <div className="flex flex-wrap justify-center items-center md:mx-60">
              {errorMsg && <p>{errorMsg}</p>}
              {images &&
                images.map((member) => (
                  <div key={member.id}>
                    <div className="pt-1.5 px-1.5 md:pt-2 md:px-4">
                      <img
                        src={member.memberImg}
                        alt={member.memberName}
                        className="w-full h-52 md:h-72"
                      />
                    </div>
                    <div className="text-center pb-4">{member.memberName}</div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default WhoWeAre;

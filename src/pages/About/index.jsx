import PageBanner from "../../components/PageBanner";
import { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";

const WhoWeAre = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [images, setImages] = useState(null);
  const [bannerImg, setBannerImg] = useState(null);
  const [founderImg, setFounderImg] = useState(null);

  useEffect(() => {
    const getBannerImg = async () => {
      const { data, error } = await supabase
        .from("pageBanners")
        .select()
        .eq("id", 4)
        .single();

      if (data !== null) {
        setBannerImg(data);
        setErrorMsg("");
      } else {
        setErrorMsg(
          "Page banner/hero image can't be loaded at the moment. Sorry"
        );
        console.error(error);
      }
    };

    getBannerImg();

    const getFounderImg = async () => {
      const { data, error } = supabase.storage
        .from("maharlika-photos")
        .getPublicUrl("members/member-1.jpg");

      if (data !== null) {
        setFounderImg(data);
        setErrorMsg("");
      } else {
        setErrorMsg("Founder image can't be loaded at the moment. Sorry");
        console.error(error);
      }
    };

    getFounderImg();

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
      {errorMsg && <div className="min-h-screen text-center">{errorMsg}</div>}
      {bannerImg && (
        <PageBanner
          image={bannerImg.imgSrc}
          alt="Group photo with Christmas outfits"
        />
      )}

      <article className="my-10">
        <div className="min-h-screen">
          <div className="flex flex-col justify-center items-center">
            <section>
              <h1 className="text-2xl md:text-4xl text-center m-6 font-heading">
                Who We Are
              </h1>
              <p className="max-w-prose m-6 md:text-lg ">
                Maharlika Divas Dance group is registered as a non-profit
                organization named under Maharlika Women's Association of
                Calgary founded by Sholan Lacey. The group dances cultural and
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
                src={founderImg?.publicUrl}
                alt="Founder: Sholan Lacey"
                className="w-full h-96"
              />
              <div className="text-center mb-6 mt-2">Sholan Lacey</div>
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

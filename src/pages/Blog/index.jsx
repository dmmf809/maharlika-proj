import React, { useEffect, useState } from "react";
import PageBanner from "../../components/PageBanner";
import supabase from "../../config/supabaseClient";
import svg from "/blog.svg";

const Blog = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const getBanner = async () => {
      const { data, error } = supabase.storage
        .from("maharlika-photos")
        .getPublicUrl("page-banner/blog-photo.jpg");

      if (data !== null) {
        setBanner(data);
        setErrorMsg("");
      } else {
        setErrorMsg("Page banner can't be loaded at the moment. Sorry");
        console.error(error);
      }
    };

    getBanner();
  }, []);

  return (
    <>
      {errorMsg && <div className="min-h-screen text-center">{errorMsg}</div>}
      {banner && (
        <PageBanner
          image={banner.publicUrl}
          alt="Benefit concert group photo"
        />
      )}

      <article className="my-10">
        <h1 className="text-2xl md:text-4xl text-center m-6 font-heading">
          Maharlika Blog
        </h1>
        <div className="text-center text-xl pt-4">
          <span>Gathering resources to write something awesome!</span>
          <div className="flex justify-center items-center py-16 md:4">
            <img src={svg} alt="Blog" className="h-72 md:h-96" />
          </div>
        </div>
      </article>
    </>
  );
};

export default Blog;

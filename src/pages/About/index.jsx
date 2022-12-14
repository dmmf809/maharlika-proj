import React from "react";
import PageBanner from "../../components/PageBanner";
import { members } from "../../data/members";

const WhoWeAre = () => {
  return (
    <>
      <PageBanner />
      <article className="my-10">
        <div className="min-h-screen">
          <div className="flex flex-col justify-center items-center">
            <section>
              <h1 className="text-2xl md:text-4xl text-center m-6 ">
                Who We Are
              </h1>
              <p className="max-w-prose m-6 md:text-lg">
                Maharlika Divas Dance group is registered as a non-profit
                organicatiom named undwe Maharlika Women's Association of
                Calgary founded by Cynthia Lacey. The group dances cultural and
                modern dance. Recently Maharlika Divas had their successful
                concert last October 22, 2022. All members are volunteer and
                they are not professional dancers, they just want to enjoy and
                share their talent in the community and different events.
              </p>
            </section>
          </div>
          <section>
            <h2 className="text-xl md:text-3xl text-center m-6">Members</h2>
            <div className="flex flex-wrap justify-center items-center md:mx-60">
              {members.map((member) => (
                <div key={member.memberName}>
                  <div className="pt-1.5 px-1.5 md:pt-4 md:px-4">
                    <img
                      src={member.image}
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

import React from "react";
import HighlightsCard from "./HighlightsCard";

export default function MatchHighlights() {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* Heading */}
      <h1 className="heading">Match Highlights</h1>

      <div className="mt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]">
        {/* Cards */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <HighlightsCard
            image="/images/football3.webp"
            title="BUGEMA STAYS ON TOP, COACH MEDDY DISPLAYS."
            date="21 March 2024"
            time="3:00pm"
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <HighlightsCard
            image="/images/bubanner.jpg"
            title="PANTHERS BATTLE UCU FOR THE TROPHY IN MUKONO."
            date="22 March 2024"
            time="4:00pm"
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <HighlightsCard
            image="/images/basketball3.webp"
            title="THE BASKETBALL TEAM DISPLAYS PRO SKILLS IN MUKONO."
            date="23 March 2024"
            time="7:00pm"
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <HighlightsCard
            image="/images/netball.jpg"
            title="A SIMPLE WIN FROM THE NETBALL TEAM AT HOME GROUNDS."
            date="24 March 2024"
            time="2:00pm"
          />
        </div>
      </div>
    </div>
  );
}
import React from "react";
import NewsCard from "../Helper/NewsCard";

export default function TrendingNews() {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* Heading */}
      <h1 className="heading">Trending News</h1>

      {/* Cards div */}
      <div className="pt-[2rem] md:pt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
        {/* Card 1 */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <NewsCard
            image="/images/footballcelebre.webp"
            date="April 11 , 2024"
            title="What is new in the Football Team"
            height="h-[300px]"
          />
        </div>

        {/* Card 2 */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <NewsCard
            image="/images/ucubu.jpg"
            date="June 20 , 2024"
            title="What is new in the Panthers Team"
            height="h-[300px]"
          />
        </div>

        {/* Card 3 */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <NewsCard
            image="/images/basketball2.webp"
            date="July 03 , 2024"
            title="What is new in the Basketball Team"
            height="h-[300px]"
          />
        </div>

        {/* Card 4 */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <NewsCard
            image="/images/netball.jpg"
            date="July 24 , 2024"
            title="What is new in the Netball Team"
            height="h-[300px]"
          />
        </div>
      </div>
    </div>
  );
}